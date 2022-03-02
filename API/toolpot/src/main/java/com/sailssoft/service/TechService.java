package com.sailssoft.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sailssoft.model.Tech_Details;



public interface TechService {

	ResponseEntity<Tech_Details> getBookById(long techid);

	ResponseEntity<String> saveTech(Tech_Details techDetails);

	ResponseEntity<String> deleteTech(long techid);

	ResponseEntity<List<Tech_Details>> getTech_details();

	ResponseEntity<String> updateTech(Tech_Details techDetails);

}
