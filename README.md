# 💼 JobApp - Job Portal Application

A full-stack job portal application built with **Spring Boot** (backend) and **React** (frontend). This application allows users to view, add, update, and delete job postings.

## 🚀 Features

- ✅ View all job postings
- ✅ Add new job postings
- ✅ Update existing job postings
- ✅ Delete job postings
- ✅ RESTful API architecture
- ✅ CORS enabled for frontend-backend communication
- ✅ Responsive React UI
- ✅ In-memory data storage

## 🛠️ Tech Stack

### Backend
- **Spring Boot 4.0.1**
- **Java 17**
- **Maven** - Dependency management
- **Lombok** - Reduce boilerplate code
- **Tomcat Jasper** - JSP support
- **Jakarta Servlet/JSTL** - Servlet and JSP Standard Tag Library

### Frontend
- **React 19.2.3**
- **React Router DOM** - Client-side routing
- **Axios** - HTTP requests
- **React Scripts** - Build tools

## 📁 Project Structure

```
JobApp/
├── src/
│   ├── main/
│   │   ├── java/com/abdo/jobapp/
│   │   │   ├── JobAppApplication.java      # Main Spring Boot application
│   │   │   ├── JobRestController.java      # REST API endpoints
│   │   │   ├── model/
│   │   │   │   └── JobPost.java            # Job entity model
│   │   │   ├── service/
│   │   │   │   └── JobService.java         # Business logic layer
│   │   │   └── repository/
│   │   │       └── JobRepo.java            # Data repository
│   │   ├── resources/
│   │   │   ├── application.properties      # Spring Boot configuration
│   │   │   ├── static/                     # Static resources
│   │   │   └── templates/                  # JSP templates
│   │   └── frontend/                       # React application
│   │       ├── src/
│   │       ├── public/
│   │       └── package.json
│   └── test/                               # Test files
├── pom.xml                                 # Maven configuration
├── mvnw                                    # Maven wrapper (Unix)
├── mvnw.cmd                                # Maven wrapper (Windows)
└── README.md
```

## 🔧 Prerequisites

Before running this application, ensure you have:

- **Java 17** or higher installed
- **Maven 3.6+** (or use included Maven wrapper)
- **Node.js 14+** and **npm** for frontend
- **Git** (optional, for version control)

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd JobApp
```

### 2. Backend Setup

#### Install Maven Dependencies

```bash
# Using Maven wrapper (recommended)
./mvnw clean install

# Or using system Maven
mvn clean install
```

#### Run Spring Boot Application

```bash
# Using Maven wrapper
./mvnw spring-boot:run

# Or using system Maven
mvn spring-boot:run
```

The backend server will start on **http://localhost:7070**

### 3. Frontend Setup

#### Navigate to Frontend Directory

```bash
cd src/main/frontend
```

#### Install Node Dependencies

```bash
npm install
```

#### Run React Development Server

```bash
npm start
```

The frontend will start on **http://localhost:3000**

## 🌐 API Endpoints

### Base URL
```
http://localhost:7070/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/jobPosts` | Get all job postings | - |
| GET | `/jobPost/{id}` | Get job by ID | - |
| POST | `/jobPosts` | Create new job posting | JobPost JSON |
| PUT | `/jobPost/{id}` | Update job posting | JobPost JSON |
| DELETE | `/jobPost/{id}` | Delete job posting | - |

### Example Request/Response

#### GET All Jobs
```bash
curl http://localhost:7070/api/jobPosts
```

**Response:**
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

#### POST New Job
```bash
curl -X POST http://localhost:7070/api/jobPosts \
  -H "Content-Type: application/json" \
  -d '{
    "id": 4,
    "postProfile": "Full Stack Developer",
    "postDesc": "Build modern web applications",
    "postTechStack": ["Java", "React", "Spring Boot"],
    "reqExperience": 3
  }'
```

## 🎨 Frontend Features

### Available Routes
- `/` - Home page
- `/view` - View all job postings
- `/add` - Add new job posting
- `/success` - Success confirmation page

### Key Components
- **ViewAllJobs** - Displays all job postings in card format
- **AddJob** - Form to create new job postings
- **Success** - Confirmation page after successful submission

## ⚙️ Configuration

### Backend Configuration (application.properties)

```properties
server.port=7070
```

### CORS Configuration

The backend is configured to accept requests from `http://localhost:3000`:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

To allow different origins, modify the `@CrossOrigin` annotation in `JobRestController.java`.

## 🧪 Testing the Application

### Test Backend API

1. Start the Spring Boot application
2. Test endpoints using curl, Postman, or browser:

```bash
# Get all jobs
curl http://localhost:7070/api/jobPosts

# Get specific job
curl http://localhost:7070/api/jobPost/1
```

### Test Frontend

1. Ensure backend is running on port 7070
2. Start React app on port 3000
3. Navigate to http://localhost:3000
4. Test the following flows:
   - View all jobs
   - Add a new job
   - Check if new job appears in the list

## 📊 Data Model

### JobPost Entity

```java
{
  "id": Integer,
  "postProfile": String,
  "postDesc": String,
  "postTechStack": ArrayList<String>,
  "reqExperience": Integer
}
```

## 🔒 CORS Policy

CORS is enabled to allow the React frontend (port 3000) to communicate with the Spring Boot backend (port 7070). The configuration is set in `JobRestController.java`.

## 🚨 Troubleshooting

### Backend Issues

**Port 7070 already in use:**
```bash
# Find process using port 7070
lsof -i:7070

# Kill the process
kill -9 <PID>
```

**Maven build fails:**
```bash
# Clean and rebuild
./mvnw clean install -U
```

### Frontend Issues

**Port 3000 already in use:**
```bash
# The app will prompt to use a different port
# Or manually kill the process
lsof -i:3000
kill -9 <PID>
```

**CORS errors:**
- Verify backend is running on port 7070
- Check `@CrossOrigin` annotation in `JobRestController.java`
- Clear browser cache and reload

**API connection failed:**
- Ensure Spring Boot backend is running first
- Check axios requests use correct URL: `http://localhost:7070/api/jobPosts`
- Verify network requests in browser DevTools

## 🔄 Development Workflow

1. **Make backend changes** → Restart Spring Boot application
2. **Make frontend changes** → React hot-reloads automatically
3. **Test API endpoints** → Use Postman or curl
4. **Test UI** → Check browser at http://localhost:3000

## 📝 Initial Sample Data

The application comes with 3 pre-loaded job postings:

1. **Software Engineer** - 2 years experience
2. **Frontend Developer** - 3 years experience  
3. **Data Scientist** - 4 years experience

## 🚀 Deployment

### Backend Deployment

```bash
# Build executable JAR
./mvnw clean package

# Run JAR file
java -jar target/JobApp-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment

```bash
cd src/main/frontend
npm run build

# Deploy the build/ directory to your hosting service
```

## 📚 Future Enhancements

- [ ] Database integration (MySQL, PostgreSQL, MongoDB)
- [ ] User authentication and authorization
- [ ] Job search and filtering functionality
- [ ] Pagination for large datasets
- [ ] File upload for job descriptions/resumes
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Job application tracking
- [ ] Advanced validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abdo** - [GitHub Profile](https://github.com/abdocodes)

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [SPRING_BOOT_CONNECTION.md](SPRING_BOOT_CONNECTION.md) for detailed setup
3. Open an issue on GitHub

---

⭐ **Star this repository** if you find it helpful!

Made with ❤️ using Spring Boot and React
