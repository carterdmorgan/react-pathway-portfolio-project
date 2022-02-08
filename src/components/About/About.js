import './About.css';

const profilePhoto = require('../../assets/images/profile.jpeg')

const About = () => {
  return(
    <section className="content">
      <img src={profilePhoto} className="side-by-side profile-photo"></img>
      <p className="side-by-side bio">
        Hello!  My name is Carter Morgan!  I'm a Lead Instructor at the University of Central Florida Coding Boot Camp.
        I have over five years of professional software engineering experience.  I am passionate about full-stack web 
        development!  I've worked for major companies, such as Disney and Grubhub.  Please take a look around my website
        and enjoy your stay!
        </p>
    </section>
  )
}

export default About;