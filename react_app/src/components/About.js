import $ from 'jquery';
import me from '../images/PEDROAMARO.png'



const About = () => {

    return (
        <div className="about-me-page">
            <div className="presentaion">
                <div className="presentation-text">
                    <h1>Pedro Amaro</h1>
                    <h2>Software engineer</h2>
                </div>
                <img src={me} className="my-photo" alt="logo" />
            </div>
        </div>
    )
}

export default About
