import React, { Component } from 'react'

import menuIcon from '../assets/menuIcon.png'


class Header extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        }
        this.openMenu = this.openMenu.bind(this)
    }
  
    openMenu(){
        this.setState({
            show: !this.state.show
        })
    }

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
                <div onClick={this.openMenu} className="responsive_header">
                    <img src={menuIcon} alt="menuIcon" width="50px"/>
                </div>
                {this.state.show && 
                    <div className="responsive_menu">
                        <div>
                            <div onClick={this.props.clickTop}>Home</div>
                            <div onClick={this.props.clickAbout}>About</div>
                            <div onClick={this.props.clickSkills}>Skills</div>
                            <div onClick={this.props.clickProjects}>Projects</div>
                            <div style={noBorder}onClick={this.props.clickContact}>Résumé</div>
                        </div>
                        <div onClick={this.openMenu} className="x">
                            X
                        </div>
                    </div>}
            </div>
        )
    }
}

const noBorder = {
    border: 'none'
}



export default Header
