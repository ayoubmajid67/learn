package org.example.springsecuritydemo.repo;

import org.example.springsecuritydemo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo  extends JpaRepository<Users,Integer> {

    Users findFirstByUsername(String username);
    Users findFirstByUsernameAndPassword(String username, String password);
}
