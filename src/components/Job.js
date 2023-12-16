import React from "react";
import './job.css';
import Sidepanel from "./Jobs/Sidepanel";
import Show from "./Jobs/Show";

function Job() {

    return (
        <div className="job_container">
            <div className="job-components">
                <div className="sidepanel">
                    <Sidepanel/>
                </div>
                <div className="show">
                    <Show/>
                </div>
            </div>
        </div>
    )
}

export default Job;



