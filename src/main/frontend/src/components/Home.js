import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
                <a href="/viewalljobs" className="btn btn-dark">
                  View All Jobs
                </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
                <a href="/addjob" className="btn btn-success">
                  Add Job
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
