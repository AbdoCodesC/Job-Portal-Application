import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

function Success() {
  const navigate = useNavigate();
  const {state} = useLocation();
  // eslint-disable-next-line
  const [message, setMessage] = useState(state.message)
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-dark bg-dark text-white">
              <div className="card-body text-center">
                <h2 className="card-title">Success!</h2>
                <p className="card-text">
                  {message}
                </p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate('/viewalljobs')}
                >
                  View All Jobs
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate('/home')}
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
