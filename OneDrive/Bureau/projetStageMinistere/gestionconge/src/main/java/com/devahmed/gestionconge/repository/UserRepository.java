package com.devahmed.gestionconge.repository;

import com.devahmed.gestionconge.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmailAndPasswd(String email, String passwd);

}
