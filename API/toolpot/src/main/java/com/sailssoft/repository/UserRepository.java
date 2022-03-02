package com.sailssoft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sailssoft.model.User;




public interface UserRepository extends JpaRepository<User,Integer>{

	User findByUsername(String username);

	
	
	//@Query(value="select user_id,username,email FROM user u", nativeQuery=true)
	//List<User> findAll();
	
	
}
