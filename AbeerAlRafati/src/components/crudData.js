import React, { Component } from 'react'

export class CrudData extends Component {
  render() {
    return (
      <div>

        {this.props.apiData.map((obj, idx) => {
          return (
            <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={() => { this.props.deleteItem(obj) }}>Delete</button>
              <button onClick={() => { this.props.updateItem(obj) }}>Edit</button>

              <h1>{obj.name}</h1>
              <h3>{obj.gender}</h3>
              <h3>{obj.psiPowers.name}</h3>
            </div>
          )

        })
        }

      </div>
    )
  }
}

export default CrudData
