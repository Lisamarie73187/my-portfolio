import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'


import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'




class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.scrollAbout = this.scrollAbout.bind(this)
        this.scrollSkills = this.scrollSkills.bind(this)
        this.scrollProjects = this.scrollProjects.bind(this)
        this.scrollContact = this.scrollContact.bind(this)
    }

    scrollAbout(){
        scrollToComponent(this.about, { offset: 10, align: 'top', duration: 1000})
    }

    scrollSkills(){
        scrollToComponent(this.Skills, { offset: 10, align: 'top', duration: 1000})
    }

    scrollProjects(){
        scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1000})
    }

    scrollContact(){
        scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1000})
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                <Header clickAbout={this.scrollAbout}
                        clickSkills={this.scrollSkills}
                        clickProjects={this.scrollProjects}
                        clickContact={this.scrollContact}/>
                    <div className="rapper">
                        <div className="grey_box">
                            <div className="name_header">Lisa<br/>Marie<br/>Herzberg<br/></div>
                        </div>
                            <div className="hero_line">l</div>
                            <div className="title_header">Web Developer<br/>Designer</div>
                    </div>
                </div>
                <section ref={(section) => { this.about = section; }}><About/></section>
                <section ref={(section) => { this.Skills = section; }}><Skills/></section>
                <section ref={(section) => { this.Projects = section; }}><Projects/></section>
                <section ref={(section) => { this.Contact = section; }}><Contact/></section>
            </div>
        )
    }
}


export default Home
