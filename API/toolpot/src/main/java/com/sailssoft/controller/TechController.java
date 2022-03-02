package com.sailssoft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sailssoft.model.Tech_Details;
import com.sailssoft.service.TechService;

import io.swagger.annotations.ApiOperation;

@RestController
public class TechController {
	
	@Autowired
	TechService techService;
	
	@GetMapping("/tech/{techid}")
	@ApiOperation("Fetching the technology details for the given techid.")
	public ResponseEntity<Tech_Details> getBookById(@PathVariable("techid") int techid) {
		return techService.getBookById(techid);
		
	}
	
	@PostMapping("/tech")
	@ApiOperation("Saving the Tech Details to database.")
	public ResponseEntity<String> saveTool(@RequestBody Tech_Details techDetails) {
		
		return techService.saveTech(techDetails);
		
	}
	
	@DeleteMapping("/tech")
	@ApiOperation("Deleting the Tech Details from database.")
	public ResponseEntity<String> deleteTech(@RequestParam long techid) {
		return techService.deleteTech(techid);
	}
	
	 @PutMapping("/tech")
	 @ApiOperation("Saving the tool Details to database.") 
	 public ResponseEntity<String> updateTech(@RequestBody Tech_Details techDetails) {
		 return techService.saveTech(techDetails);
	  }
	 
	 
	@GetMapping("/techs") 
	public ResponseEntity<List<Tech_Details>> findAllTechs() {
		return techService.getTech_details(); 
	}
	
}
	



