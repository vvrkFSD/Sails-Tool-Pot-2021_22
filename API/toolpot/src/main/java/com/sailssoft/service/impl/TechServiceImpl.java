package com.sailssoft.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sailssoft.model.Tech_Details;
import com.sailssoft.repository.TechRepository;
import com.sailssoft.service.TechService;

@Service
public class TechServiceImpl implements TechService {

	@Autowired
	private TechRepository repository;

	@Override
	public ResponseEntity<Tech_Details> getBookById(long techid) {
		Optional<Tech_Details> techDetails = repository.findById(techid);
		if (techDetails.isPresent()) {
			return new ResponseEntity<>(techDetails.get(), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}

	@Override
	public ResponseEntity<String> saveTech(Tech_Details techDetails) {

		Tech_Details tech = repository.save(techDetails);
		if (tech != null) {
			return new ResponseEntity<String>(tech.getTech_name() + " saved successfully", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("technology not saved", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@Override
	public ResponseEntity<String> deleteTech(long techid) {
		if (repository.existsById(techid)) {
			repository.deleteById(techid);
			return new ResponseEntity<String>(techid + " deleted successfully", HttpStatus.CREATED);
		} else
			return new ResponseEntity<String>("Tech is not available", HttpStatus.NO_CONTENT);
	}

	@Override
	public ResponseEntity<List<Tech_Details>> getTech_details() {
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> updateTech(Tech_Details techDetails) {
		Optional<Tech_Details> tech= repository.findById(techDetails.getTech_id());
		if (tech.isPresent()) {
			Tech_Details td = tech.get();
			td.setTech_id(techDetails.getTech_id());
			td.setTech_name(techDetails.getTech_name());
			td.setUrl(techDetails.getUrl());
			

			repository.save(td);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

}

