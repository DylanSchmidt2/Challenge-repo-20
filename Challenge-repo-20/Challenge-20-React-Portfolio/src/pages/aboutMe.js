import React from 'react';
import Portrait from '../Images/Portrait.jpeg'

export default function AboutMe() {
    return (
        <div className="flex-row">
            <h1 className="flex-row">About Me!</h1>
            <p className="flex-row"> Hello! My name is Dylan Schmidt. I'm from Oak Grove, MN. I'm currently a student at the University of Minnesota. <br></br>
              I've been obsessed with computers and video games since I was exposed to them, so, what's a better carreer to get into!? <br></br> If I'm not doing school, I'm probably at the gym or playing video games. <br></br>.
            </p>
            <div>
                <img className="flex-row" src={Portrait} alt="Dylan Schmidt"
                style={{ height: "400px", paddingRight: "10px" }}  />
            </div>
        </div>
    );
}
