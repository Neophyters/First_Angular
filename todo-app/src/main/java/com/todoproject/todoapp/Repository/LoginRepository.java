package com.todoproject.todoapp.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.todoproject.todoapp.Model.User;

@Repository
public interface LoginRepository extends MongoRepository <User, String> {
    User findByUsername(String username);
}
