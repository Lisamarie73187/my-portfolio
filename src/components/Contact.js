import React, { Component } from 'react'

import Resume from '../assets/LisaHerzberg.pdf'


class Contact extends Component {
    

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
