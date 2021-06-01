import React, { Component } from 'react'

export class ApiData extends Component {
  render() {
    return (
      <div>

        {this.props.apiData.map((obj, idx) => {
          return (
            <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={() => { this.props.addCharcterToFav(obj) }}>Add to favorite</button>
              <h1>{obj.name}</h1>
              <h3>{obj.gender}</h3>
              <img src={obj.image} alt="rr" />
              <img src={obj.psiPowers.name} alt="rr" />
              <h3>{obj.psiPowers.name}</h3>
            </div>
          )

        })
        }

      </div>
    )
  }
}

export default ApiData
