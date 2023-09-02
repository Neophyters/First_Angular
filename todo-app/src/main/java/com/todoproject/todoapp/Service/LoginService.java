package com.todoproject.todoapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todoproject.todoapp.Model.User;
import com.todoproject.todoapp.Repository.LoginRepository;


@Service
public class LoginService {

     @Autowired
    private LoginRepository loginRepository;

    public void saveUser(User user) {
        loginRepository.save(user);
    }

    public boolean checkUsername(String username) {
        if (loginRepository.findByUsername(username) == null) {
            return false;
        } else {
            return true;
        }
    }
    
}
