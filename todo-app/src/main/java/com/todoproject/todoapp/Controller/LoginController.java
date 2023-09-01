package com.todoproject.todoapp.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.web.bind.annotation.*;

import com.todoproject.todoapp.Service.LoginService;
import com.todoproject.todoapp.Model.User;

@RestController
public class LoginController {

    
    @Autowired 
    private LoginService loginService;

    @PostMapping("/api/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        
        loginService.saveUser(user);

        return ResponseEntity.ok("{\"message\": \"The user has registered successfully\"}");
    }
}
