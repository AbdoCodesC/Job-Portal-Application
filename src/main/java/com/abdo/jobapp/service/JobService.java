package com.abdo.jobapp.service;

import com.abdo.jobapp.model.JobPost;
import com.abdo.jobapp.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    JobRepo repo = new JobRepo();
    public void addJob(JobPost job) {
        repo.addJob(job);
    }
    public List<JobPost> getAllJobs() {
        // Logic to view all jobs
        return repo.getAllJobs();
    }
    public JobPost getJob(int id) {
        // Logic to view a job by ID
        return repo.getJob(id);
    }

    public void updateJob(int id, JobPost updatedJob) {
        repo.updateJob(id, updatedJob);
    }
    public void deleteJob(int id) {
        repo.deleteJob(id);
    }
}
