import React from 'react'
import './Loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="preloader-container">
        <span className="preloader"></span>
      </div>
    )
  }
}

export default Loader