# Job Portal React App

This is a React-based job portal application converted from JSP. It uses React Router for navigation and JSON Server as a mock backend.

## Features

- **Home Page**: Landing page with quick access to all jobs and add job functionality
- **View All Jobs**: Display all job postings with details
- **Add Job**: Form to create new job postings
- **Success Page**: Confirmation page after successful job submission

## Data Structure

The `db.json` file contains job posts with the following structure:

```json
{
  "id": number,
  "postProfile": string,
  "postDesc": string,
  "postTechStack": [array of strings],
  "reqExperience": number
}
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd job-portal-react
   ```

2. Dependencies are already installed, but if needed:
   ```bash
   npm install
   ```

## Running the Application

You need to run **TWO** terminals simultaneously:

### Terminal 1: Start the JSON Server (Mock Backend)
```bash
npm run server
```
This will start the JSON server on `http://localhost:5000`

### Terminal 2: Start the React App
```bash
npm start
```
This will start the React development server on `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Click "View All Jobs" to see existing job postings
3. Click "Add Job" to create a new job posting
4. Fill in the form with:
   - Post ID (unique number)
   - Post Profile (job title)
   - Post Description
   - Required Experience (years)
   - Tech Stack (hold Ctrl/Cmd to select multiple)
5. Submit the form to add the job
6. View the success page and navigate back to see your new job listing

## Project Structure

```
job-portal-react/
├── public/
│   └── index.html          # HTML template with Bootstrap CDN
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Home.js         # Home page component
│   │   ├── AddJob.js       # Add job form component
│   │   ├── ViewAllJobs.js  # Job listings component
│   │   └── Success.js      # Success confirmation component
│   ├── App.js              # Main app with routing
│   └── index.js            # Entry point
├── db.json                 # Mock database
└── package.json            # Dependencies and scripts
```

## Technologies Used

- **React** - Frontend framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Bootstrap 5** - UI styling
- **JSON Server** - Mock REST API

## API Endpoints

The JSON Server provides the following endpoints:

- `GET http://localhost:5000/jobPosts` - Get all job posts
- `GET http://localhost:5000/jobPosts/:id` - Get a specific job post
- `POST http://localhost:5000/jobPosts` - Create a new job post
- `PUT http://localhost:5000/jobPosts/:id` - Update a job post
- `DELETE http://localhost:5000/jobPosts/:id` - Delete a job post

## Differences from JSP Version

1. **Client-side routing** instead of server-side navigation
2. **REST API calls** using Axios instead of form submissions to Spring controllers
3. **Component-based architecture** with reusable React components
4. **State management** using React hooks (useState, useEffect)
5. **Mock backend** with JSON Server instead of Spring Boot backend

## Notes

- Make sure both servers (React and JSON Server) are running simultaneously
- The JSON Server data persists in `db.json` file
- Bootstrap is loaded via CDN for styling consistency with the original JSP version
