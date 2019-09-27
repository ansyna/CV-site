import React from "react";
import Picture from "./hanna.jpg";

class CVComponentPresentationClass extends React.Component{

  render(){
    return (
        <div>
          <h3>Hanna Golikova - {this.props.position}</h3>
          <div className={"contacts"}>+353831802506 | an.syna@gmail.com | Dublin, Ireland</div>
          <img className={"photo"} style={{animation: `spin ${this.props.speed}s linear infinite`}} src={Picture} />
          <h4>Career Summary</h4>
          <div className={"summary"}>Strong PHP and JS Developer with more than {this.props.years} years of professional experience and a wide skill set.
            Proficient in both back-end and front-end web development. </div>
          <div>

            <h4>Professional</h4>

            <ul className={"cv-list"}>
              <li>Deep understanding of MVC pattern, software engineering concepts and Object Oriented Design</li>
              <li>Experienced in database development and query optimization, strong with MySQL</li>
              <li>Proficient at providing high-quality, readable, structured, flexible and efficient code</li>
              <li>Good at JS, AJAX and jQuery usage, experienced in designing Blade, JS and other templates</li>
              <li>Competent in providing responsive design for desktop and mobile view</li>
              <li>Experienced in LEMP and LAMP development.</li>
              <li>Knowledgeable of server configuration management. Familiar with Puppet and Hiera</li>
              <li>Having exceptional communication skills, able to interrelate with people at all levels</li>
            </ul>

            <h4>Technologies</h4>

            <ul className={"cv-list"}>
              <li>Proficient in PHP, MySQL, SQL, Yii, Laravel, JavaScript, jQuery, Vue.js, RabbitMQ, AJAX, HTML, CSS, Sass, Blade, Smarty, Yaml, Bootstrap, Eloquent and Backbone</li>
              <li>Fluent in GIT/SVN Version Control and Windows/Linux/FreeBSD/OS X operating systems.</li>
              <li>Familiar with Ruby on Rails, React, Redis, Memcaсhed, Java, C++, JSP, Servlets, XML, etc</li>
            </ul>

          </div>
        </div>
    );
  }
}

export default CVComponentPresentationClass;