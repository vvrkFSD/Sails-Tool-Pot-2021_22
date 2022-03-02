package com.sailssoft.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sailssoft.model.ProjectMaster;



public interface ProjectsService {

	ResponseEntity<ProjectMaster> getBookById(long projectid);

	ResponseEntity<String> saveProject(ProjectMaster projectMaster);

	ResponseEntity<String> deleteProject(long projectid);

	ResponseEntity<List<ProjectMaster>> getProjectMasters();

	ResponseEntity<String> updateProject(ProjectMaster projectMaster);

}
