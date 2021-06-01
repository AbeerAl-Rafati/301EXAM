import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form onSubmit={e => { this.props.updateItem() }}>
        <input type="submit"> update</input>
        <input onChange={e => { this.props.editUpdatFormname() }} value={this.props.name} type="text"></input>
        <input onChange={e => { this.props.editUpdatFormgender() }} value={this.props.gender} type="text"></input>
      </form>
    )
  }
}

export default Form
