import $ from 'jquery';
import me from '../images/ItsMePedroo3.png'
import arrow from '../images/arrow.svg'
import React, { useEffect } from 'react';




const About = () => {
    useEffect(() => {
        // code to run after render goes here
        var sections = document.querySelectorAll('.presentation-text');
        var container = document.querySelector('.about-me-content');
        container.addEventListener('scroll', function () {
            sections.forEach((e, i) => {
                var top = (e.getBoundingClientRect().top);
                if (top == 0) {
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
      }, []); // <-- empty array means 'run once'
    return (
        <div className="about-me-page">
            <img src={arrow} className="arrow"></img>
            <div className="presentaion">
            <div className="links-container">
                <a className="links-container_resume" 
                    href="/resume">
                    Resume
                </a> 
                <a className="links-container_contact" 
                    href="/contact">
                    Contact
                </a>
            </div>
            <div className="presentation-text">
                <h1>Pedro Amaro</h1>
                <h2>Software engineer</h2>
            </div>
            <img src={me} className="my-photo" alt="logo" />
            </div>
            <div className="about-me-content">
                <div className="presentation-text">
                    <h3>Who am I?</h3>
                    <p>Hi, my name is Pedro Amaro, I am a junior software engineer at the beginning of his career passionate about challenges and ready to make a positive impact in the world.</p>
                    <p>
                    I am relocating to Zurich on 15 Oct 2021 (could be earlier If a job opportunity arises) searching for the best opportunities in my area of studies cause I believe that this is the type of city where I'll have one of the best ways to enlarge my vision and knowledge, also I always wanted to live abroad and so I couldn't be more excited to start this new chapter in my life.
                    </p>
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
                    <p>Some of my day-to-day technologies are, LESS/SCSS, HTML, PHP, JQUERY, REST, XML, GitHub, and JIRA. Also in Improove we work with the Agile/Scrum methodology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
