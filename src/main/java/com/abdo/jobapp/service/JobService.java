package com.abdo.jobapp.service;

import com.abdo.jobapp.model.JobPost;
import com.abdo.jobapp.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class JobService {
    @Autowired
    private JobRepo repo;

    public List<JobPost> getAllJobs() {
        return repo.findAll();
    }

    public void addJob(JobPost job) {
        repo.save(job);
    }

    public JobPost getJob(int id) {
        return repo.findById(id).orElse(new JobPost());
    }

    public void updateJob(int id, JobPost updatedJob) {
        JobPost existingJob = repo.findById(id).orElse(null);
        if (existingJob != null) {
            existingJob.setPostDesc(updatedJob.getPostDesc());
            existingJob.setPostProfile(updatedJob.getPostProfile());
            existingJob.setPostTechStack(updatedJob.getPostTechStack());
            existingJob.setReqExperience(updatedJob.getReqExperience());
            repo.save(existingJob);
        }
    }

    public void deleteJob(int id) {
        repo.deleteById(id);
    }

    public void load(){
        ArrayList<JobPost> jobs = new ArrayList<>(List.of(
            new JobPost(1, "Software Engineer", "Develop and maintain software applications.", new ArrayList<>(List.of("Java", "Spring Boot", "SQL")), 2),
            new JobPost(2, "Frontend Developer", "Design and implement user interfaces.", new ArrayList<>(List.of("JavaScript", "React", "CSS")), 3),
            new JobPost(3, "Data Scientist", "Analyze and interpret complex data.", new ArrayList<>(List.of("Python", "R", "Machine Learning")), 4))
        );
        repo.saveAll(jobs);
    }

    public List<JobPost> search(String postDesc, String postProfile) {
        return repo.findJobPostByPostProfileContainingOrPostDescContaining(postDesc, postProfile);
    }
}


//
//@Service
//public class JobService {
//    @Autowired
//    JobRepo repo = new JobRepo();
//    public void addJob(JobPost job) {
//        repo.addJob(job);
//    }
//    public List<JobPost> getAllJobs() {
//        // Logic to view all jobs
//        return repo.getAllJobs();
//    }
//    public JobPost getJob(int id) {
//        // Logic to view a job by ID
//        return repo.getJob(id);
//    }
//
//    public void updateJob(int id, JobPost updatedJob) {
//        repo.updateJob(id, updatedJob);
//    }
//    public void deleteJob(int id) {
//        repo.deleteJob(id);
//    }
//}
