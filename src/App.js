import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div class="container">
            <div class="sidenav">
                <ul class="burger">
                <li><a href="#About">About</a></li>
                <li><a href="#Design">Design</a></li>
                <li><a href="#Credits">Credits</a></li>
                <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
               <div id="About" class="About">
                <span class="headers">
                    About this page
                </span>
                <div class="section1">
                <p>This page is built with pure
                    <i class="fa fa-html5" aria-hidden="true"></i> HTML 5 and
                    <i class="fa fa-css3" aria-hidden="true"></i> CSS 3.</p>
                <p>Idea was to create a side navigation bar without using

                    JavaScript and the usual
                    <i class="fa fa-bars" aria-hidden="true"></i> hamburger menu.

                </p>
                <p>
                    And it was partly because, I thought the hamburger menu seemed
                     too complicated for me
                      to start with.
                </p>
            </div>
               </div>
               <div id="Design" class="Experience">
                <span class="headers">
                    Design
                </span>
                <div class="section1">
                <p>
                    I started with a
                    <a href="https://repl.it/@pallikonda9s" target="blank">
                        <i class="fa fa-rocket" aria-hidden="true"></i>
                    </a>  repl on my
                    <i class="fa fa-mobile" aria-hidden="true"></i> mobile
                </p>
                <p>
                    Then added some
                    <i class="fa fa-fonticons" aria-hidden="true"></i> awesomeness
                    for some visual interest.
                </p>
            </div>
               </div>
               <div id="Credits" class="Testimonials">
                <span class="headers">
                    Credits
                </span>
                <div class="section1">
                <p>
                   Shout out to
                   <a href="https://twitter.com/swyx" target="blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>  @swyx for
                    his codepen 
                    <i class="fa fa-codepen" aria-hidden="true"></i>
                  which helped me finally center content inside a
                   <i class="fa fa-code" aria-hidden="true"></i> div
                   <i class="fa fa-smile-o" aria-hidden="true"></i>
                </p>
                <p>
                    Not to mention a lot of samples on
                    <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                    and
                    <i class="fa fa-google" aria-hidden="true"></i>
                </p>
            </div>
               </div>
               <div id="Contact" class="Contact">
                <span class="headers">
                    Get in touch with me
                </span>
                <div class="contact_section">
                    <a href="https://twitter.com/pallikonda_s" target="blank">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a> &nbsp;
                    <a href="https://github.com/spallikonda" target="blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a> &nbsp;
                    <a href="mailto:pallikonda.srinivas@gmail.com" target="blank">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a> &nbsp;
                    <a href="https://in.linkedin.com/in/srinivaspallikonda" target="blank">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a> &nbsp;

                </div>
               </div>
          </div>


    </div>
  );
}

export default App;
