import React from 'react'

import profilePic from '../assets/ProfilePic.jpg'


const About = () => {
    return (
            <div>
            <div className="gradient_Box">
                <h1>Hello, I am Lisa</h1>
                <div className="about_line">i</div>
                <div className="profilePicture"><img src={profilePic} alt="profile" width="280px"/></div>
                <p style={about}>I am a full stack developer and designer with a passion for technology and building web products. Due to my previous customer focused background, I bring excellent product knowledge and a deep understanding of product experience. This is what drives me to deliver high-quality code and improves the overall quality of products and services. </p>
            </div>
            <div className="flex">
                <div className="darkBox" style={border}>
                    <div>
                        <h2>Design</h2>
                        <p className="p">Adobe Illustrator, InDesign, and Photoshop.  </p>
                    </div>
                </div>
                <div className="darkBox" style={border}>
                    <div>
                        <h2>Front-End</h2>
                        <p className="p">Html, CSS, Javascript, Sass, React.js, and RESTful Services and APIs</p>
                    </div>
                </div>
                <div className="darkBox">
                    <div>
                        <h2>Back-End</h2>
                        <p className="p">Node.js, Express, SQL, and PostgreSQL.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


const border = {
    borderRight: '.5px solid white'
}

const about = {
    fontSize: '15pt',
    padding: '0 200px',
    letterSpacing: '0'
}


export default About
