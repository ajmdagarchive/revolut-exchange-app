import React, {Component} from 'react'

import './Logo.css'

class Logo extends Component {
  public render() {
    return (
    <div className="Logo">
      <img src="./assets/revolut-logo.png" alt="Revolut logo" className="Logo-Image" />
    </div>
    )
  }
}

export default Logo
