import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'


import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaBehanceSquare from 'react-icons/lib/fa/behance-square'
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'


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
        this.scrollTop = this.scrollTop.bind(this)
        this.scrollAbout = this.scrollAbout.bind(this)
        this.scrollSkills = this.scrollSkills.bind(this)
        this.scrollProjects = this.scrollProjects.bind(this)
        this.scrollContact = this.scrollContact.bind(this)
    }

    scrollTop(){
        scrollToComponent(this.top, { offset: 10, align: 'top', duration: 1000})
    }

    scrollAbout(){
        scrollToComponent(this.about, { offset: -10, align: 'top', duration: 1000})
    }

    scrollSkills(){
        scrollToComponent(this.Skills, { offset: -10, align: 'top', duration: 1000})
    }

    scrollProjects(){
        scrollToComponent(this.Projects, { offset: -10, align: 'top', duration: 1000})
    }

    scrollContact(){
        scrollToComponent(this.Contact, { offset: -10, align: 'top', duration: 1000})
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                <section ref={(section) => { this.top = section; }}>
                <Header clickAbout={this.scrollAbout}
                        clickSkills={this.scrollSkills}
                        clickProjects={this.scrollProjects}
                        clickContact={this.scrollContact}
                        clickTop={this.scrollTop}/></section>
                    <div className="rapper">
                        <div className="grey_box">
                            <div className="name_header">Lisa<br/>Marie<br/>Herzberg<br/></div>
                        </div>
                            <div className="hero_line">l</div>
                            <div className="title_header">Web Developer<br/>Designer</div>
                    </div>
                    <div className="responsive_home">
                        <div>Lisa Marie Herzberg</div>
                        <div>Web Developer and Designer</div>
                    </div>
                </div>
                <div className="contact_icons">
                    <a href="https://github.com/Lisamarie73187" target="https://github.com/Lisamarie73187"><FaGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/lisaherzberg/" target="https://www.linkedin.com/in/lisaherzberg/"><FaLinkedinSquare/></a>
                    <a href="https://www.behance.net/lherzber0f53" target="https://www.behance.net/lherzber0f53"><FaBehanceSquare/></a>
                    <a href="mailto:lisamarieherzberg@gmail.com"><FaEnvelopeSquare/></a>
                </div>
                <section ref={(section) => { this.about = section; }}><About/></section>
                <section ref={(section) => { this.Skills = section; }}><Skills/></section>
                <section ref={(section) => { this.Projects = section; }}><Projects/></section>
                <section ref={(section) => { this.Contact = section; }}><Contact/></section>
                <div className="footer">
                    <div>All content copyright Lisa Marie Herzberg 2018 ©</div>
                </div>
            </div>
        )
    }
}


export default Home
