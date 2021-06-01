import React, { Component } from 'react'
import axios from "axios";
import ApiData from './apiData'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      apiDataShow: false,
      crudData: []
    };
  }

  componentDidMount = async () => {

    const apiReq = await axios.get(`${process.env.REACT_APP_SERVER}/get-characters`)


    this.setState = {
      apiData: apiReq.data,
      apiDataShow: true

    }

  }



  addCharcterToFav = async (data) => {

    const req = await axios.post(`${process.env.REACT_APP_SERVER}/get-characters/favorite`, data)


    this.setState = {
      crudData: req.data,
    }

  }



  render() {
    return (
      <div>
        <p>home</p>



        {this.state.show &&
          <ApiData apiData={this.state.apiData} addCharcterToFav={this.addCharcterToFav} crudData={this.state.crudData} />}
      </div>
    )
  }
}

export default Home
