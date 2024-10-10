package com.MavenProject.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    //http://localhost:8080/hello

    @GetMapping("/hello")
    public ResponseEntity<Object> hello() {
        String result = "Hello, Docker!";

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
