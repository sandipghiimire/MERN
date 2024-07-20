import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <Navbar />
            <h1>About</h1>
            <div className="line"><div>
                <h2>Sandip Ghimire</h2>
                <img src="./sandip-image.jpg" alt="sandip.ghiimire" />
                <p>Passionate and creative graphic designer with a strong foundation in visual arts and design principles. Currently pursuing a Bachelor’s degree at Nepal Mega College, I am eager to leverage my skills and education to contribute to a dynamic team and create impactful visual content.</p><br />
                    <h2>What I'm Doing</h2>
                <div className="whatiamdoing">
                    <div className="design">
                        <h5>Graphic Design</h5>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                    <div className="design">
                        <h5>Web Development</h5>
                        <p>High-quality development of sites at the professional level.</p>
                    </div>
                    <div className="design">
                        <h5>Mobile Apps</h5>
                        <p>Professional development of applications for iOS and Android.</p>
                    </div>
                    <div className="design">
                        <h5>Photography</h5>
                        <p>I make high-quality photos of any category at a professional level.</p>
                    </div>
                </div>
                    <h2>Testimonials</h2>
                <div className="testimonials">
                    <div className="testimonialsuser">
                        <h5>Sandip Ghimire</h5>
                        <p>Sandip was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                    <div className="testimonialsuser">
                        <h5>Shambhu Ghimire</h5>
                        <p>Sandip w5s hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
                    </div>
                </div>
            </div></div>
        </div>
    )
}

export default About