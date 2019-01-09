import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        // console.log(this.props.state)
        const fentities = this.props.state[this.props.match.params.fentities]
        console.log(fentities)
        return (
            <div>
                <h1 id="fentities-title">{this.props.match.params.fentities}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <Link to={`/directory/${this.props.match.params.fentities}/${fentities.find(t => t.name === f.name ).name}`}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities