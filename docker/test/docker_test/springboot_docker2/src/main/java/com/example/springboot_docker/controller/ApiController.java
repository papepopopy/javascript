package com.example.springboot_docker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class ApiController  {

//    http://localhost:8077/api/v1/test/hello

    @GetMapping("/hello")
    public ResponseEntity<Object> testApi() {
        String result = "통신 성공";
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
