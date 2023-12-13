package com.devahmed.gestionconge.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("aucune utilisateur n existe avec ce id : "+ id);
    }
    public UserNotFoundException(String message) {
        super(message);
    }
}
