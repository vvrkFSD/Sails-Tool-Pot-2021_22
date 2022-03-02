package com.sailssoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sailssoft.model.Tool_Details;



@Repository
public interface ToolRepository extends JpaRepository<Tool_Details, Long> {


}
