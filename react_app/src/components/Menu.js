import $ from 'jquery';
import me from '../images/PEDROAMARO.png'
import arrow from '../images/arrow.svg'

const Menu = () => {

    let state = true;

    function handleMenu() {
        console.log('The link was clicked.');
        if (state) {
            $("#left-container").addClass('closed');
            $("#left-container").removeClass('open');
            $("#menu-button-img").addClass('closed');
            state=false;
        } else {
            $("#left-container").removeClass('closed');
            $("#left-container").addClass('open');
            $("#menu-button-img").removeClass('closed');
            state=true;
        } 
    }

    return (
        <div className="App-header left-container" id="left-container">
            <a className="arrow-container" onClick={handleMenu} href="#" id="menu-button">
            <img src={arrow} className="arrow" id="menu-button-img"></img>
            </a>
            <img src={me} className="my-photo" alt="logo" />
            <div className="links-container">
                <a className="links-container_about" 
                    href="/">
                    About Me
                </a>
                <a className="links-container_resume" 
                    href="/resume">
                    Resume
                </a> 
                <a className="links-container_contact" 
                    href="/contact">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Menu
