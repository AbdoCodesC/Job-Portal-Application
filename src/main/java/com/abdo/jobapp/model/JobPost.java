package com.abdo.jobapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Controller
public class JobPost {
    private int id;
    private String postProfile;
    private String postDesc;
    private ArrayList<String> postTechStack;
    private int reqExperience;
}
