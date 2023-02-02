import React from 'react';
import myResume from '../Assets/myResume.pdf'

export default function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div>
                <a href={myResume} target="_blank"
                    rel="noreferrer">
                    <h2>
                        _Download resume_
                    </h2>
                </a>
            </div>
            <p>
                Skills I've recently learned --
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>Handlebars.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
                Hit the contact page to learn more!
            </p>
        </div>
    );
}