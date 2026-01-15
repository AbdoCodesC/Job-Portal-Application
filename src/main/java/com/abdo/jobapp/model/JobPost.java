package com.abdo.jobapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;

import java.io.Serial;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Controller
@Entity
public class JobPost {
    @Id
    private int id;
    private String postProfile;
    private String postDesc;
    private ArrayList<String> postTechStack;
    private int reqExperience;
}
