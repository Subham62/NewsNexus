import loading from './Ajax-loader.gif'
import React, { Component } from 'react'

export class Spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading"></img>
      </div>
    )
  }
}

export default Spinner