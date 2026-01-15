import React, { useState } from 'react';
import Navbar from './Navbar';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function ViewAllJobs() {
    const {state} = useLocation();
    // eslint-disable-next-line
    const [jobPost, setJobPost] = useState (state.jobPost)

    const navigate = useNavigate();

    const deleteJobPost = async () => {
        await axios.delete(`http://localhost:7070/api/jobPost/${jobPost.id}`);
        navigate("/viewalljobs");
        // Implement delete functionality here
        console.log("Delete job post with ID:", jobPost.id);
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4 text-center font-weight-bold">Job Post</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card border-dark bg-dark text-white">
                            <div className="card-body">
                                <h5 className="card-title">{jobPost.postProfile}</h5>
                                <p className="card-text">
                                    <strong>Description:</strong> {jobPost.postDesc}
                                </p>
                                <p className="card-text">
                                    <strong>Experience Required:</strong> {jobPost.reqExperience} years
                                </p>
                                <p className="card-text">
                                    <strong>Tech Stack:</strong>
                                </p>
                                <ul>
                                    {jobPost.postTechStack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                                <button type="button" className={"btn btn-secondary me-2"} onClick={() => navigate("/editjob", {state: {jobPost: jobPost}})}>Edit</button>
                                <button type="button" className={"btn btn-danger"} onClick={deleteJobPost}>Delete</button>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAllJobs;
