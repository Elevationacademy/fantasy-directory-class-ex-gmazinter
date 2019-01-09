import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h1 id="fentities-title">{this.props.match.params.fentities}</h1>
                {/* <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <div className="mini">
                                <img className="directory-img" src={f.imgUrl} alt="" />
                                <span>{f.name}</span>
                            </div>
                        )
                    })}
                </div> */}
            </div>)
    }
}

export default Fentities