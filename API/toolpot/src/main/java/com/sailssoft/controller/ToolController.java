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

import com.sailssoft.model.Tool_Details;
import com.sailssoft.service.ToolService;

import io.swagger.annotations.ApiOperation;

@RestController
public class ToolController {
	
	@Autowired
	ToolService toolService;
	
	@GetMapping("/tool/{toolid}")
	@ApiOperation("Fetching the Project details for the given toolid.")
	public ResponseEntity<Tool_Details> getBookById(@PathVariable("toolid") int toolid) {
		return toolService.getBookById(toolid);
		
	}
	
	@PostMapping("/tool")
	@ApiOperation("Saving the Tool Details to database.")
	public ResponseEntity<String> saveTool(@RequestBody Tool_Details toolDetails) {
		
		return toolService.saveTool(toolDetails);
		
	}
	
	@DeleteMapping("/tool")
	@ApiOperation("Deleting the Tool Details from database.")
	public ResponseEntity<String> deleteTool(@RequestParam long toolid) {
		return toolService.deleteTool(toolid);
	}
	
	 @PutMapping("/tool")
	 @ApiOperation("Saving the tool Details to database.") 
	 public ResponseEntity<String> updateTool(@RequestBody Tool_Details toolDetails) {
		 return toolService.saveTool(toolDetails);
	  }
	 
	 
	@GetMapping("/tools") 
	public ResponseEntity<List<Tool_Details>> findAllTools() {
		return toolService.getTool_details(); 
	}
	
}
	

