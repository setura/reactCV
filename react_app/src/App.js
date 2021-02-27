import logo from './logo.svg';
import me from './images/PEDROAMARO.png'
import arrow from './images/arrow.svg'
import $ from 'jquery';
import './App.scss';

function App() {
  function handleMenu(e) {
    console.log('The link was clicked.');
    $("#left-container").css("transform", 'translate(0px,0px)');
    $("#menu-button-img").style.transform = "180deg";
    $("#menu-button-img").style.transformOrigin = "center";
  }

  return (
    <div className="body App">
      <div className="App-header left-container" id="left-container">
        <a className="arrow-container" onClick={handleMenu} href="#" id="menu-button">
          <img src={arrow} className="arrow" id="menu-button-img"></img>
        </a>
        <img src={me} className="App-logo" alt="logo" />
        <div className="links-container">
          <a className="links-container_about" 
            href="">
            About Me
          </a>
          <a className="links-container_resume" 
            href="">
            Resume
          </a> 
          <a className="links-container_contact" 
            href="">
            Contact
          </a>
        </div>
      </div>
      <div className="main-content">
          content
      </div>
    </div>
  );
}

export default App;
