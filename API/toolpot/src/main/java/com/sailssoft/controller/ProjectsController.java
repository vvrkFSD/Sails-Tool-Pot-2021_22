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

import com.sailssoft.model.ProjectMaster;
import com.sailssoft.service.ProjectsService;

import io.swagger.annotations.ApiOperation;

@RestController
public class ProjectsController {
	
	@Autowired
	ProjectsService projectService;
	
	@GetMapping("/project/{projectid}")
	@ApiOperation("Fetching the Project details for the given projectid.")
	public ResponseEntity<ProjectMaster> getBookById(@PathVariable("projectid") int projectid) {
		return projectService.getBookById(projectid);
		
	}
	@PostMapping("/project")
	@ApiOperation("Saving the Project Details to database.")
	public ResponseEntity<String> saveProject(@RequestBody ProjectMaster projectMaster) {
		
		return projectService.saveProject(projectMaster);
		
	}
	@DeleteMapping("/project")
	@ApiOperation("Deleting the Project Details from database.")
	public ResponseEntity<String> deleteProject(@RequestParam long projectid) {
		return projectService.deleteProject(projectid);
	}
	
	 @PutMapping("/project")
	 @ApiOperation("Saving the Project Details to database.") 
	 public ResponseEntity<String> updateProject(@RequestBody ProjectMaster projectMaster) {
		 return projectService.updateProject(projectMaster);
	  }
	@GetMapping("/projects") 
	public ResponseEntity<List<ProjectMaster>> findAllProjects() {
		return projectService.getProjectMasters(); 
	}
	
}
	

