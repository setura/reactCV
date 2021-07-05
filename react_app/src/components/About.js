import $ from 'jquery';
import me from '../images/ItsMePedroo3.png'
import arrow from '../images/arrow.svg'
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";


const About = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(' copied!');
        e.target.classList.add('copied');
      };
      
    useEffect(() => {
        var sections = document.querySelectorAll('.presentation-text');
        var container = document.querySelector('.about-me-content');
        container.addEventListener('scroll', function () {
            sections.forEach((e, i) => {
                var top = (e.getBoundingClientRect().top);
                if (top === 0) {
                    e.classList.remove('is-inview')
                    $('.about-me-content').removeClass('is-inview')
                    $('.arrow').show()
                } else {
                    e.classList.add('is-inview')
                    $('.about-me-content').addClass('is-inview')
                    $('.arrow').hide()
                }
            });
        })
        container.dispatchEvent(new CustomEvent('scroll'));
      }, []);
    return (
        <div className="about-me-page">
            <img src={arrow} className="arrow" alt="not-found"></img>
            <div className="presentaion">
            <div className="links-container">
                <Link className="links-container_resume"  to="/resume">Resume</Link>
                <div className="links-container_contact a" onClick={copyToClipboard}>
                    Email contact
                    {copySuccess}
                </div>
            </div>
            <div className="presentation-text">
                <h1>Pedro Amaro</h1>
                <h2>Software engineer</h2>
            </div>
            <form className="email-form">
                <textarea
                    ref={textAreaRef}
                    value="pedroamaro97@gmail.com"
                />
            </form>
            <img src={me} className="my-photo" alt="logo" />
            </div>
            <div className="about-me-content">
                <div className="presentation-text">
                    <h3>Who am I?</h3>
                    <p>Hi, my name is Pedro Amaro, I am a junior software engineer at the beginning of his career passionate about challenges and ready to make a positive impact in the world.</p>
                    {/* <p>
                    I am relocating to Zurich on 15 Oct 2021 (could be earlier If a job opportunity arises) to search for the best opportunities in my area of studies cause I believe that this is the type of city where I'll have one of the best ways to enlarge my vision and knowledge, also I always wanted to live abroad, and so I couldn't be more excited to start this new chapter in my life.
                    </p> */}
                    <p>I am currently working on Improove, a company focused on e-commerce with headquarters in Sweden where I started my way into frontend development.
                    Some project I have been a part of:</p>

                    <div className="projects-at-improove">
                        <a className="project" href="https://www.tiffosi.com" target="_blank">
                            <img alt="Tiffosi" src="https://www.tiffosi.com/static/version1614363174/frontend/Improove/tiffosi/pt_PT/images/logo.svg"
                            />
                        </a>
                        <a className="project" href="https://www.nameon.no" target="_blank">
                            <img alt="NameOn" src="https://www.nameon.no/skin/frontend/mage-to-measure/name-on-2/images/nameon.svg"
                            />
                        </a>
                        <a className="project" href="https://unoliving.se" target="_blank">
                            <img alt="Unoliving" src="https://unoliving.se/static/version1618521397/frontend/Improove/unoliving/sv_SE/images/logo.svg"
                            />
                        </a>
                        <a className="project" href="https://www.aarke.com" target="_blank">
                            <img alt="Aarke" src="https://www.aarke.com/static/version1617087406/frontend/Improove/aarke/en_US/images/logo.svg"
                            />
                        </a>
                        <a className="project" href="https://lightningbolt-usa.com" target="_blank">
                            <img alt="LightningBolt" src="https://lightningbolt-usa.com/pub/static/version1619013315/frontend/Improove/lightningbolt/en_GB/images/logo-black.svg"
                            />
                        </a>
                        <a className="project" href="https://collagetheshop.com" target="_blank">
                            <img alt="CollageTheShop" src="https://collagetheshop.com/static/version1616682364/frontend/Improove/collage/en_US/images/logo.svg"
                            />
                        </a>
                    </div>
                    <p>Some of my day-to-day technologies are, LESS/SCSS, HTML, PHP, JQUERY, REST, XML, Docker, GitHub, and JIRA. Also in Improove we work with the Agile/Scrum methodology.
                    </p>
                    <br></br>
                    <br></br>
                    <h3>Some projects from university</h3>
                    <h4>Fly me to the moon (data structures and algorithms class) Groups of 2 persons</h4>
                    <p> In this project we needed to create a solution for flight system that could calculate the fasted route to get from airport A to Z.<br></br>
                        Some key factors we had to take into consideration: <br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - This project was programmed in C<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - There were 750000 Flights and 250000 Airports<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - Environment limitations<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'}{'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - 64 MB RAM<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'}{'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - 2GB ROM<br></br>
                    </p>
                    <p>
                    These are the data structures that we used:<br></br>
                    {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - Graph structure, vertex (airports), arcs (flights)<br></br>
                    {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - Linked list to store the the flights for each airport<br></br>
                    {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - Min heap to have the less time-consuming airport from A to B with easy access (This was a key factor to use the following algorithm)<br></br><br></br>
                    
                    And the algorithm that we choose to use was the Dijkstra to get the fastest route from airport A to B because the weight of the arcs was always positive (The flight time was the weight) otherwise we would have used Bellman-Ford.
                    </p>

                    <br></br>
                    <br></br>
                    <h4>Air Quality Monitoring (Computer network) Groups of 2 persons</h4>
                    <p> This project was about networks, we needed to create 4 programs that would communicate with each other. We had sensors to measure a chemical element from the air, a broker (We decided that this was going to be the server), a client which was able to do A, B, C operations and an admin that were able to do D, E, F operations. <br></br>
                        Some key factors we had to take into consideration: <br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - This project was programmed in Python<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - We had to implement a publish-subscribe mode using a dedicated thread and socket.<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - We should be able to update firmware version of the sensors  by serializing a file and sending it to the broker that would then send it to the desired type of sensors.<br></br>
                    </p>

                    <br></br>
                    <br></br>
                    <h4>Social distancing (Operating Systems II) Groups of 2 persons</h4>
                    <p> In this project we were to implement a web solution to help with social distancing in times of Covid-19. We could see how many people were in a location (we used leaflet maps to show the locations and labeled these locations accordingly to its crowd).<br></br>
                        Some key factors we had to take into consideration: <br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - This project was programmed in JAVA using the Spring Framework, and gradle for dependency management.<br></br>
                        {'\u202F'} {'\u202F'} {'\u202F'} {'\u202F'} - We used a Postgre DB to save the data and HTTP Request Methods like GETs and POSTs to transfer information.<br></br>
                        <br></br>
                        In another project from this class, we did a similar project to manage stocks in different stores using a embedded DB and a login system using MD5 algorithm (with 128-bit hash value)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
