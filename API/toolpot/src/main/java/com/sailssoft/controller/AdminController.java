package com.sailssoft.controller;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sailssoft.model.User;
import com.sailssoft.repository.UserRepository;
import com.sailssoft.service.CustomUserDetailService;
import com.sailssoft.service.EmailSenderService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/secure/auth/admin")

public class AdminController {
	
	User user;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private EmailSenderService service;
	CustomUserDetailService customer;
	//endpoint to add user
	@PostMapping("/user")
	public ResponseEntity<String> addUser(@RequestBody User user) {
		
		String pwd=user.getPassword();
		String encryptePwd=passwordEncoder.encode(pwd);
		user.setPassword(encryptePwd);
		userRepository.save(user);
		String username=user.getUsername();
		String pswd="P@ssword!123";
		String email=user.getEmail();
		
		service.sendSimpleEmail(email,"username:"+username+"  " +"password:"+pswd ,"Login Credentials" );
		
		return  new ResponseEntity<String>("user added",HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public  ResponseEntity<String> deleteuser(@PathVariable int id) {
		Optional<User> userd=userRepository.findById(id);
		if(userd.isPresent()) {
			userRepository.delete(userd.get());
			return new ResponseEntity<String>("user deleted successfulyy",HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("User not Available",HttpStatus.NO_CONTENT);
		}
		
	}
	
	@GetMapping("/users")
	public List<User> get() {
		
		 return userRepository.findAll();
	}
	@GetMapping("/users/{id}")
	public Optional<User> getUserById(@PathVariable int id) {
	    return userRepository.findById(id);
	}
	
	

}

