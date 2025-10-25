import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile1.jpg'

const About = () => {
return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m an aspiring software engineer passionate about building useful applications. I love learning new technologies and solving real-world problems.</p>
                    <p>I’m a student exploring the world of programming and development. My goal is to grow into a skilled software engineer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p> <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JAVA</p> <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Competative 
                            <br/>Programmer</p> <hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Secured 2nd place</h1>
                <p>Freshathon</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1st place</h1>
                <p>Projects Presentation</p>
            </div>
        </div>
    </div>
)
}

export default About