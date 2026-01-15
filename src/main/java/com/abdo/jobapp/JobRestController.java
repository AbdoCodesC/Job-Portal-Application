package com.abdo.jobapp;

import com.abdo.jobapp.model.JobPost;
import com.abdo.jobapp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {
    @Autowired
    private JobService jobService;

    @GetMapping("/jobPosts")
    public List<JobPost> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/jobPost/{id}")
    public JobPost getJobById(@PathVariable int id) {
        System.out.println("Fetching job with ID: " + id);
        return jobService.getJob(id);
    }

    @PostMapping("/jobPosts")
    public JobPost addJob(@RequestBody JobPost jobPost) {
        jobService.addJob(jobPost);
        return jobService.getJob(jobPost.getId());
    }

    @PutMapping("/jobPost/{id}")
    public JobPost updateJob(@PathVariable int id, @RequestBody JobPost jobPost) {
        jobService.updateJob(id, jobPost);
        return jobService.getJob(jobPost.getId());
    }

    @DeleteMapping("/jobPost/{id}")
    public void deleteJob(@PathVariable int id) {
        jobService.deleteJob(id);
    }
}
