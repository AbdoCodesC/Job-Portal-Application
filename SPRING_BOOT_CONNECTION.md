## 🏗️ Backend Setup (Spring Boot)

#### 1. **JobRestController.java** ✅ (NEW)

```java
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {
    
    @GetMapping("/jobPosts")
    public List<JobPost> getAllJobs()
    
    @PostMapping("/jobPosts")
    public JobPost addJob(@RequestBody JobPost jobPost)
}
```

**Features:**
- REST API endpoints for React app
- CORS enabled for localhost:3000
- GET endpoint to fetch all jobs
- POST endpoint to create new jobs

### 2. **Existing Backend Components** (Already Present)

- ✅ `JobController.java` - For JSP views (kept for backward compatibility)
- ✅ `JobService.java` - Business logic layer
- ✅ `JobRepo.java` - Data repository with in-memory storage
- ✅ `JobPost.java` - Data model
- ✅ `application.properties` - Server runs on port 7070

## 🚀 How to Run

### Step 1: Start Spring Boot Backend

```bash
# From project root directory
./mvnw spring-boot:run

# Or if using Maven installed
mvn spring-boot:run
```

✅ Backend will run on: **http://localhost:7070**

### Step 2: Start React Frontend

```bash
# Navigate to React app
cd job-portal-react

# Start React development server
npm start
```

✅ Frontend will run on: **http://localhost:3000**

## 🌐 API Endpoints

Your Spring Boot backend now exposes these REST endpoints:

### GET All Jobs
```
URL: http://localhost:7070/api/jobPosts
Method: GET
Response: Array of JobPost objects
```

**Example Response:**
```json
[
  {
    "id": 1,
    "postProfile": "Software Engineer",
    "postDesc": "Develop and maintain software applications.",
    "postTechStack": ["Java", "Spring Boot", "SQL"],
    "reqExperience": 2
  }
]
```

### POST New Job
```
URL: http://localhost:7070/api/jobPosts
Method: POST
Content-Type: application/json
Body: JobPost object
```

**Example Request:**
```json
{
  "id": 4,
  "postProfile": "Full Stack Developer",
  "postDesc": "Build modern web applications",
  "postTechStack": ["Java", "React", "Spring Boot"],
  "reqExperience": 3
}
```

## 🔧 React Configuration

### Updated Components:

#### ViewAllJobs.js
```javascript
// Now fetches from Spring Boot
axios.get('http://localhost:7070/api/jobPosts')
```

#### AddJob.js
```javascript
// Now posts to Spring Boot
axios.post('http://localhost:7070/api/jobPosts', jobPost)
```

## ✨ How It Works

```
┌─────────────┐         HTTP Request          ┌──────────────────┐
│   React     │  ----------------------->      │   Spring Boot    │
│   (3000)    │                                │   (7070)         │
│             │  <-----------------------      │                  │
└─────────────┘      JSON Response             └──────────────────┘
                                                        │
                                                        ▼
                                                ┌──────────────────┐
                                                │   JobService     │
                                                └──────────────────┘
                                                        │
                                                        ▼
                                                ┌──────────────────┐
                                                │   JobRepo        │
                                                │  (In-Memory)     │
                                                └──────────────────┘
```

## 📊 Data Flow

1. **View All Jobs:**
   - React: `ViewAllJobs.js` → axios GET request
   - Spring: `JobRestController.getAllJobs()` → `JobService.getAllJobs()` → `JobRepo.getAllJobs()`
   - Response: List of jobs sent back to React
   - React: Updates state and renders job cards

2. **Add New Job:**
   - React: `AddJob.js` form submission → axios POST request
   - Spring: `JobRestController.addJob()` → `JobService.addJob()` → `JobRepo.addJob()`
   - Response: Confirmation sent back to React
   - React: Navigates to success page

## 🔒 CORS Configuration

CORS is enabled in `JobRestController`:
```java
@CrossOrigin(origins = "http://localhost:3000")
```

This allows React (running on port 3000) to make requests to Spring Boot (running on port 7070).

## 🧪 Testing the Connection

### Test 1: View Jobs
1. Start Spring Boot backend
2. Start React frontend
3. Navigate to http://localhost:3000
4. Click "View All Jobs"
5. You should see 3 pre-loaded jobs from JobRepo

### Test 2: Add Job
1. Click "Add Job"
2. Fill in the form:
   - Post ID: 4
   - Profile: "DevOps Engineer"
   - Description: "Manage CI/CD pipelines"
   - Experience: 3
   - Tech Stack: Select "Docker", "Kubernetes"
3. Submit
4. Check success page
5. Go back to "View All Jobs" - your new job should appear

### Test 3: API Direct Access
Open browser or Postman:
```
GET http://localhost:7070/api/jobPosts
```
Should return JSON array of jobs.

## 📝 Initial Data

Spring Boot comes with 3 pre-loaded jobs in `JobRepo.java`:
1. Software Engineer (2 years exp)
2. Frontend Developer (3 years exp)
3. Data Scientist (4 years exp)

## 🔄 Switching Between JSON Server and Spring Boot

### Using Spring Boot Backend (Current Configuration)
```javascript
// React components configured for:
http://localhost:7070/api/jobPosts
```

### Using JSON Server (If needed)
If you want to use JSON Server instead:
1. Change URLs in React components back to `http://localhost:5000/jobPosts`
2. Run `npm run server` in job-portal-react directory

## 🚨 Troubleshooting

### Backend not starting?
```bash
# Check if port 7070 is in use
lsof -i:7070

# Run with Maven
./mvnw clean install
./mvnw spring-boot:run
```

### CORS errors?
- Ensure `@CrossOrigin` is present in `JobRestController`
- Check browser console for specific CORS errors
- Verify React is running on port 3000

### Jobs not appearing?
- Check Spring Boot console for errors
- Verify API endpoint: http://localhost:7070/api/jobPosts
- Check browser Network tab for failed requests

### Connection refused?
- Ensure Spring Boot is running first (port 7070)
- Then start React (port 3000)
- Check both servers are running in separate terminals

## ✅ Verification Checklist

- [ ] Spring Boot runs on port 7070
- [ ] React app runs on port 3000
- [ ] GET /api/jobPosts returns job list
- [ ] POST /api/jobPosts creates new job
- [ ] CORS allows requests from React
- [ ] ViewAllJobs displays jobs from backend
- [ ] AddJob form submits to backend
- [ ] Success page appears after submission
- [ ] New jobs appear in job list

## 📚 Next Steps

1. **Database Integration**: Replace in-memory storage with actual database (MySQL, PostgreSQL)
2. **Validation**: Add backend validation for job posts
3. **Error Handling**: Improve error messages
4. **Authentication**: Add security layer
5. **Additional Features**: Search, filter, edit, delete

---

**Current Status:** ✅ React app connected to Spring Boot backend
