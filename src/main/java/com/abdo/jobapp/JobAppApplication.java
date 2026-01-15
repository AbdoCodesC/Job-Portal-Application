package com.abdo.jobapp;

import com.abdo.jobapp.model.JobPost;
import com.abdo.jobapp.repository.JobRepo;
import jakarta.transaction.Transaction;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class JobAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobAppApplication.class, args);
//        JobRepo jobRepo = context.getBean(JobRepo.class);
//        JobPost jp = new JobPost();
//
//
//        jp.setId(4);
//        jp.setPostDesc("DevOps Engineer");
//        jp.setPostProfile("Manage and automate infrastructure.");
//        jp.setPostTechStack(new java.util.ArrayList<>(java.util.List.of("Docker", "Kubernetes", "AWS")));
//        jp.setReqExperience(3);
//
//        jobRepo.save(jp);

    }

}
