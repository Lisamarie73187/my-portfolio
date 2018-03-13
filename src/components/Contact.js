import React, { Component } from 'react'

import Resume from '../assets/LisaHerzbergWeb Developer.pdf'


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="contact">
                <a target="_blank" alt="Lisa Resume" title="Lisa's Resume" href={Resume}><div>
                Download My Résumé
                </div></a>
                </div>
            </div>
        )
    }
}


export default Contact
