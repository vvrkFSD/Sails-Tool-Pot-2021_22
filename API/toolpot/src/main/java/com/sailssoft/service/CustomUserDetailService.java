package com.sailssoft.service;


import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sailssoft.model.User;
import com.sailssoft.repository.UserRepository;



@Service
public class CustomUserDetailService implements UserDetailsService {

	private UserRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 User user=repository.findByUsername(username);
		 CustomUserDetails userDetails=null;
		 
		 if(user!=null) {
			 
			 userDetails=new CustomUserDetails();  //Get data from DB and set to  userDetails class
			 userDetails.setUser(user);
		 }
		 else {
			 throw new UsernameNotFoundException("user not exist with the name"+ username);
		 }
		
		
		
		return userDetails;
	}


}
