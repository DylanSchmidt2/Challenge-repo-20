import React from 'react';
import CMS from '../Images/bcss2';
import CampsiteFinder from '../Images/bcss1.png';
import PWA from '../Images/bcss3'


export default function Portfolio() {
    return (
        <div className="flex-row">
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/prj1-grp-j" target="_blank" rel="noreferrer">
                Campsite Finder <br></br>
                <img className="row justify-content-start" src={CampsiteFinder} alt="Network API logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/DylanSchmidt2/Challenge-repo-19" target="_blank" rel="noreferrer">
                Text Editor <br></br>
                <img className="row justify-content-end" src={PWA} alt="PWA logo"
                    style={{ height: "200px", width: "400px",paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/DylanSchmidt2/Challenge-repo-14" target="_blank" rel="noreferrer">
                CMS Style Blog <br></br>
                <img className="flex-row" src={CMS} alt="CMS logo"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />

                </a>
            </div>
        </div>
    );
}
