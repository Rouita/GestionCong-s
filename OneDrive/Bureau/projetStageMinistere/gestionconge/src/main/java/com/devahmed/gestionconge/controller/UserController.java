package com.devahmed.gestionconge.controller;

import com.devahmed.gestionconge.exception.UserNotFoundException;
import com.devahmed.gestionconge.model.User;
import com.devahmed.gestionconge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> showAll(){
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setProfile(newUser.getProfile());
                    user.setSolde(newUser.getSolde());
                    user.setPasswd(newUser.getPasswd());
                    user.setDateDebut(newUser.getDateDebut());
                    user.setDateFin(newUser.getDateFin());
                    user.setMotif(newUser.getMotif());
                    user.setEtat(newUser.getEtat());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }















    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "suppression avec succes pour ce utilisateur :  "+id;
    }



    @PostMapping("/login")
    User login(@RequestBody User loginUser) {
        String email = loginUser.getEmail();
        String passwd = loginUser.getPasswd();

        User user = userRepository.findByEmailAndPasswd(email, passwd);
        if (user == null) {
            throw new UserNotFoundException("Identifiants de connexion incorrects.");
        }

        return user;
    }









}
