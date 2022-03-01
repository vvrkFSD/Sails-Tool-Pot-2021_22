package com.sailssoft.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sailssoft.model.Tool_Details;



public interface ToolService {

	ResponseEntity<Tool_Details> getBookById(long toolid);

	ResponseEntity<String> saveTool(Tool_Details toolDetails);

	ResponseEntity<String> deleteTool(long toolid);

	ResponseEntity<List<Tool_Details>> getTool_details();

	ResponseEntity<String> updateTool(Tool_Details toolDetails);

}
