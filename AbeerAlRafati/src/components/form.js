import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.updateItem}>
        <input type="submit"></input>
        <input onChange={this.props.editUpdatFormname} value={this.props.name} type="text"></input>
        <input onChange={this.props.editUpdatFormgender} value={this.props.gender} type="text"></input>
      </div>
    )
  }
}

export default Form
