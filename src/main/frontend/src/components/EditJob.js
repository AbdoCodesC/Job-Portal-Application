import React, { useState } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

function EditJob() {
    const {state} = useLocation();
    const [formData, setFormData] = useState(state.jobPost);

    const navigate = useNavigate();

    const techStackOptions = [
        'Java', 'JavaScript', 'Python', 'C++', 'C#', 'Swift', 'TypeScript',
        'Go', 'Kotlin', 'Rust', 'PHP', 'HTML5', 'CSS3', 'React', 'Angular',
        'Vue.js', 'React Native', 'Flutter', 'Node.js', 'Express.js',
        'Django', 'Flask', 'Ruby on Rails', 'Laravel', 'Spring Boot',
        'TensorFlow', 'PyTorch', 'Kubernetes', 'Docker', 'Jenkins',
        'AWS', 'Azure', 'Google Cloud', 'DevOps', 'Blockchain',
        'Machine Learning', 'Artificial Intelligence', 'Cybersecurity',
        'GraphQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
        'Microservices', 'REST API', 'GraphQL', 'Agile', 'Scrum'
    ].sort();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (e) => {
        const options = e.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        setFormData({
            ...formData,
            postTechStack: selectedValues,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const jobPost = {
            id: parseInt(formData.id),
            postProfile: formData.postProfile,
            postDesc: formData.postDesc,
            postTechStack: formData.postTechStack,
            reqExperience: parseInt(formData.reqExperience),
        };

        console.log('Submitting job post:', jobPost);

        axios
            .put(`http://localhost:7070/api/jobPost/${jobPost.id}`, jobPost)
            .then((response) => {
                console.log('Job posted successfully:', response.data);
                navigate('/success', {state: {message: 'Job updated successfully!'}})
            })
            .catch((error) => {
                console.error('Error posting job:', error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="mb-3 text-center fs-3 font-weight-bold">
                                    Edit Job
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1">
                                        <label htmlFor="postId" className="form-label">
                                            Post ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="postId"
                                            name="postId"
                                            value={formData.id}
                                            readOnly={true}
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="postProfile" className="form-label">
                                            Post Profile
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="postProfile"
                                            name="postProfile"
                                            value={formData.postProfile}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="postDesc" className="form-label">
                                            Post Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="postDesc"
                                            name="postDesc"
                                            rows="2"
                                            value={formData.postDesc}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="reqExperience" className="form-label">
                                            Required Experience
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="reqExperience"
                                            name="reqExperience"
                                            value={formData.reqExperience}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="postTechStack" className="form-label">
                                            Tech Stack
                                        </label>
                                        <select
                                            multiple
                                            className="form-select"
                                            id="postTechStack"
                                            name="postTechStack"
                                            onChange={handleSelectChange}
                                            required
                                            style={{ height: '150px' }}
                                        >
                                            {techStackOptions.map((tech, index) => (
                                                <option key={index} value={tech}>
                                                    {tech}
                                                </option>
                                            ))}
                                        </select>
                                        <small className="form-text text-muted">
                                            Hold Ctrl (Windows) or Command (Mac) to select multiple options
                                        </small>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditJob;


