import React, { Component } from 'react';
import "./Jumbotron.css"
import "./J.css"

import ProfilePic from "./me.jpeg";
// import Footer from "../Footer/Footer"

// import Attributes from "../Attributes/Atrributes";
import Namebanner from "../Namebanner/Namebanner";

import { Badge } from 'reactstrap';



class Jumbotron extends Component {

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }
    render(props) {
        return (
<div>
    <Namebanner />

    <div className="wrapper">
                <div className="one">
                {/* <div className="header">
                Experience / Background
                </div> */}
                <h1><Badge id="title" color="light">Experience / Background</Badge></h1>

                <p id="spacing">
                I have work experience in the health and medical industry working with patients in clinical and outpatient setting as well as with M.D.'s and researchers at University of California, San Francisco. 
                
                <br/>
                <br/>
                 For further work experience please visit my LinkedIn page by clicking on the LinkedIn icon in the footer. 
                    </p>

                </div>
                <div className="two">
                <h1><Badge id="title" color="light"> Technologies</Badge></h1>
                <p id="spacing">

                        React.Js
                             <i className="fab fa-react" id="react"></i>
                        &nbsp;and&nbsp;Javascript <i className="fab fa-js" id="javascript"></i> 
                            
                            &nbsp;
                            
                            {/* &nbsp; */}


                  are examples of a library and computer programming language I am most familiar with, respectively.
                  <br/>
                  <br/>

                  I have previous experience using Node.jS, JQuery, HTML, CSS, MongoDB, MySQL, and Handlebars.js. 
                    </p>

                </div>
                <div className="three">
                <h1><Badge id="title" color="light">Fun Facts</Badge></h1>

                <p id="spacing">
                        <ul>
                            <li>
                                I lost 25 pounds at 9 years old.

                                             </li>
                            <li>
                                I am a meal prep enthusiast.
                                 </li>
                            <li>
                                I am "Art-C", not artsy.
                                 </li>

                            <li>
                                I volunteer at A Meal With Dignity, a non-profit organization that feeds the homeless in San Francisco.
                                 </li>
                        </ul>

                    </p>

                </div>
                <div className="four">
                <h1><Badge id="title" color="light">Portfolio</Badge></h1>
                <p id="spacing">
                        This portolio is a space to showcase my projects.  Furthermore, this space is an area for me to experiment with new CSS (effects and animations) + HTML I discover.
                </p>

                </div>
                {/* <div class="five">Five</div>
                <div class="six">Six</div> */}
            </div>



</div>

            



        )
    }
}

export default Jumbotron
