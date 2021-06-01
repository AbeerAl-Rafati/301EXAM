import React, { Component } from 'react'
import axios from "axios";
import CrudData from './crudData'
import Form from './form'

export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crudData: this.props.crudData,
      name: '',
      gender: ''


    };
  }


  deleteItem = async (id) => {

    const req = await axios.delete(`${process.env.REACT_APP_SERVER}/get-characters/:id`)

    this.setState = {
      crudData: req.data,
    }
  }


  editUpdatFormname = (name, id) => {
    this.setState = {
      name: crud.target.value,

    }
  }
  editUpdatFormgender = (gender, id) => {
    this.setState = {

      gender: crud.target.value,
    }
  }

  updateItem = async (id) => {

    const request = await axios.put(`${process.env.REACT_APP_SERVER}/get-characters/:id`,)


  }



  render() {
    return (
      <div>
        <p>fav</p>

        <Form editUpdatFormname={this.editUpdatFormname} updateItem={this.updateItem} editUpdatFormgender={this.editUpdatFormgender} />
        <CrudData deleteItem={this.deleteItem} updateItem={this.updateItem} />


      </div>
    )
  }
}

export default Fav
