import React, { Component } from 'react'
import axios from "axios";
import CrudData from './crudData'
import Form from './form'

export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crudData: this.props.crudData,

    };
  }


  deleteItem = async (id) => {

    const req = await axios.delete(`${process.env.REACT_APP_SERVER}/get-characters/:id`)

    this.setState = {
      crudData: req.data,
    }
  }


  editUpdatForm = (crud, id) => {
    this.setState = {
      crudData.name : crud.target.value,
      crudData.gender : crud.target.value,
    }
  }

  updateItem = async => {

    const request = await axios.put(`${process.env.REACT_APP_SERVER}/get-characters/:id`,)
  }



  render() {
    return (
      <div>
        <p>fav</p>

        <Form editUpdatForm={this.editUpdatForm} updateItem={this.updateItem} />
        <CrudData deleteItem={this.deleteItem} updateItem={this.updateItem} />


      </div>
    )
  }
}

export default Fav
