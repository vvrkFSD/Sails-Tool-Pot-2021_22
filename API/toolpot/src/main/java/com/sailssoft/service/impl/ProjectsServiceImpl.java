package com.sailssoft.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sailssoft.model.ProjectMaster;
import com.sailssoft.repository.ProjectRepository;
import com.sailssoft.service.ProjectsService;



@Service
public class ProjectsServiceImpl implements ProjectsService {

	@Autowired
	private ProjectRepository repository;
	@Override
	public ResponseEntity<ProjectMaster> getBookById(long projectid) {
		Optional<ProjectMaster> projectDetails = repository.findById(projectid);
		if (projectDetails.isPresent()) {
			return new ResponseEntity<>(projectDetails.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	@Override
	public ResponseEntity<String> saveProject(ProjectMaster projectMaster) {

		ProjectMaster project = repository.save(projectMaster);
		if (project != null) {
			return new ResponseEntity<String>(project.getProject_name() + " saved successfully", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("Project didn't save", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@Override
	public ResponseEntity<String> deleteProject(long projectid) {
		if (repository.existsById(projectid)) {
			repository.deleteById(projectid);
			return new ResponseEntity<String>(projectid + " deleted successfully", HttpStatus.CREATED);
		} else
			return new ResponseEntity<String>("Project is not available", HttpStatus.NO_CONTENT);
	}

	@Override
	public ResponseEntity<List<ProjectMaster>> getProjectMasters() {
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> updateProject(ProjectMaster projectMaster) {
		Optional<ProjectMaster> project = repository.findById(projectMaster.getProject_id());
		if (project.isPresent()) {
			ProjectMaster pm = project.get();
			pm
			
			.setProject_id(projectMaster.getProject_id());
			pm.setDescription(projectMaster.getDescription());
			pm.setStatus(projectMaster.getStatus());
			pm.setProject_name(projectMaster.getProject_name());
			pm.setStart_date(projectMaster.getStart_date());
			pm.setEnd_date(projectMaster.getEnd_date());
			repository.save(pm);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}
