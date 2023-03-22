import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home () {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name Is Linga Reddy</h2>
                <div className='prompt'>
                    <p>A Student With a Passion for Learning and Creating Web Applications</p>
                    <LinkedInIcon/>
                    <EmailIcon/>
                    <GithubIcon/>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, Three JS, HTML, CSS,Flutter, NPM, Bootstrap, MaterialUI, TailwindCSS</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJS, ExpressJS, 
              MySQL, MongoDB, AWS S3, Postman</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, Python, C</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home