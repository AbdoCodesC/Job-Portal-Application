package com.abdo.jobapp.repository;

import com.abdo.jobapp.model.JobPost;
import com.abdo.jobapp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface JobRepo extends JpaRepository <JobPost, Integer> {
    List <JobPost> findJobPostByPostProfileContainingOrPostDescContaining(String postDesc, String postProfile);
}

//
//@Repository
//public class JobRepo {
//    private ArrayList <JobPost> jobs = new ArrayList<>(List.of(
//            new JobPost(1, "Software Engineer", "Develop and maintain software applications.", new ArrayList<>(List.of("Java", "Spring Boot", "SQL")), 2),
//            new JobPost(2, "Frontend Developer", "Design and implement user interfaces.", new ArrayList<>(List.of("JavaScript", "React", "CSS")), 3),
//            new JobPost(3, "Data Scientist", "Analyze and interpret complex data.", new ArrayList<>(List.of("Python", "R", "Machine Learning")), 4))
//    );
//    public List<JobPost> getAllJobs() {
//        // Logic to get all jobs from the database
//        return jobs;
//    }
//
//    public void addJob(JobPost job) {
//        // Logic to add a job to the database
//        jobs.add(job);
//        System.out.println(jobs);
//    }
//
//    public JobPost getJob(int id) {
//        for (JobPost job: jobs) {
//            if (job.getId() == id) {
//                return job;
//            }
//        }
//        return null;
//    }
//
//    public void updateJob(int id, JobPost updatedJob) {
//        for (int i = 0; i < jobs.size(); i++) {
//            if (jobs.get(i).getId() == id) {
//                jobs.set(i, updatedJob);
//                return;
//            }
//        }
//    }
//
//    public void deleteJob(int id) {
//        for (int i = 0; i < jobs.size(); i++) {
//            if (jobs.get(i).getId() == id) {
//                jobs.remove(i);
//                return;
//            }
//        }
//    }
//}
