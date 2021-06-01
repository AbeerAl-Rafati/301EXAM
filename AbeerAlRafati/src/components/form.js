import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form onSubmit>
        <input type="submit"></input>
        <input onChange value={this.props.name} type="text"></input>
        <input onChange value={this.props.gender} type="text"></input>
      </div>
    )
  }
}

export default Form
