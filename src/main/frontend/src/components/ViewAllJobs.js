import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {useNavigate} from "react-router-dom";

function ViewAllJobs() {
  const [jobPosts, setJobPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:7070/api/jobPosts')
      .then((response) => {
        setJobPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4 text-center font-weight-bold">Job Post List</h2>
        <div className="row row-cols-2">
          {jobPosts.map((jobPost) => (
            <div className="col mb-4" key={jobPost.id} onClick={() => navigate(`/viewjob`, {state: {jobPost: jobPost}})}>
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
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewAllJobs;
