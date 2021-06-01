'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const superagent = require('superagent');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());




/////////////////////////////////////////////////////////

//api endpoint

class myCharacters {
  constructor(character) {
    this.name = character.name
    this.gender = character.gender
    this.image = character.img
    this.psiPowersimg = character.psiPowers.img
    this.psiPowersname = character.psiPowers.name
    this.id = character._id
  }
}



app.get('/get-characters', (req, res) => {

  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`

  superagent.get(url).then((data) => {
    const myData = data.body.map(aaa => {
      newCharachter = new myCharacters(aaa)
    }
    )
    res.send(myData);
    // console.log(myData);
  }
  ).catch((err) => { console.log(`the errrrrrrorrrrrrrrr ${err}`) })


});

///////////////////////////////////////////////////////////////

//database 


const schema = new mongoose.Schema({
  name: String,
  gender: String,
  image: String,
  psiPowers: {},
  id: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  }
});

const pyschonauts = mongoose.model('pyschonauts', schema);



//////////////////////////////////////


//crud endpoints



//create endpoint 

app.post('/get-characters/favorite', (req, res) => {

  const { name, gender, image, psiPowers, id } = req.body

  pyschonauts.find({ id: id }, (error, data) => {

    if (data.length > 0) {
      res.send('item exist')
    } else {
      const newPyschonauts = {
        name: name,
        gender: gender,
        image: image,
        psiPowersimg: psiPowers.name,
        psiPowersimg: psiPowers.img

      }

      data.save(newPyschonauts);
      res.send('added ')
    }

  })



});





// get endpoint 

app.get('/get-characters/favorite', (req, res) => {

  pyschonauts.find({}, (error, data) => {
    res.send(data)
  })



});




//delete endpoint


app.delete('/get-characters/favorite/:id', (req, res) => {

  const id = req.params.id;

  const Data = pyschonauts.remove({ id: id }, (error, data) => {

    pyschonauts.find({}, (error, data) => {
      res.send(data)
    })
  })


});




app.put('/get-characters/favorite/:id', (req, res) => {
  const id = req.params.id;
  const { name, gender } = req.body;


  pyschonauts.find({ id: id }, (error, data) => {

    data[0].name = name
    data[0].gender = gender
    data[0].save();

    pyschonauts.find({}, (error, data) => { res.send(data) })


  }

  )

})






///////////////////////////////////////////////////


// API proof of life
app.get('/', (req, res) => {
  res.send('everything is working!')
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});