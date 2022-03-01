package com.sailssoft.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sailssoft.model.Tool_Details;
import com.sailssoft.repository.ToolRepository;
import com.sailssoft.service.ToolService;



@Service
public class ToolsServiceImpl implements ToolService {

	@Autowired
	private ToolRepository repository;

	@Override
	public ResponseEntity<Tool_Details> getBookById(long toolid) {
		Optional<Tool_Details> toolDetails = repository.findById(toolid);
		if (toolDetails.isPresent()) {
			return new ResponseEntity<>(toolDetails.get(), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}

	@Override
	public ResponseEntity<String> saveTool(Tool_Details toolDetails) {

		Tool_Details tool = repository.save(toolDetails);
		if (tool != null) {
			return new ResponseEntity<String>(tool.getTool_name() + " saved successfully", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("tool didn't save", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@Override
	public ResponseEntity<String> deleteTool(long toolid) {
		if (repository.existsById(toolid)) {
			repository.deleteById(toolid);
			return new ResponseEntity<String>(toolid + " deleted successfully", HttpStatus.CREATED);
		} else
			return new ResponseEntity<String>("Tool is not available", HttpStatus.NO_CONTENT);
	}

	@Override
	public ResponseEntity<List<Tool_Details>> getTool_details() {
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> updateTool(Tool_Details toolDetails) {
		Optional<Tool_Details> tool= repository.findById(toolDetails.getTool_id());
		if (tool.isPresent()) {
			Tool_Details td = tool.get();
			td.setTool_id(toolDetails.getTool_id());
			td.setTool_name(toolDetails.getTool_name());
			td.setUrl(toolDetails.getUrl());
			

			repository.save(td);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}
