import React, { Component } from 'react'


class Header extends Component {
  

    render() {
        return (
            <div>
                <div className="header">
                    <div className="flex__left">
                        <div onClick={this.props.clickTop}>Home</div>
                        <div onClick={this.props.clickAbout}>About</div>
                        <div onClick={this.props.clickSkills}>Skills</div>
                        <div onClick={this.props.clickProjects}>Projects</div>
                        <div style={noBorder}onClick={this.props.clickContact}>Résumé</div>
                    </div>
                </div>
            </div>
        )
    }
}

const noBorder = {
    border: 'none'
}



export default Header
