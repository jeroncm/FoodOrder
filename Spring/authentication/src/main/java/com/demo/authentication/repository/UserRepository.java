package com.demo.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.authentication.model.UserDb;

@Repository
public interface UserRepository extends JpaRepository<UserDb, Integer> {
	UserDb findByFirstName(String firstName);

}
