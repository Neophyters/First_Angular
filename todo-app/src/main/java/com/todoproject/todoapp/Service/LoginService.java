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

    public boolean isUsernameExist(String username) {
        if (loginRepository.findByUsername(username) == null) {
            return false;
        } else {
            return true;
        }
    }

    public boolean isPasswordExist(String username, String password) {
        User user = loginRepository.findByUsername(username);
        if (user==null || !user.getPassword().equals(password)) {
            return false;
        } else {   
            return true;
        }
    }
    
}
