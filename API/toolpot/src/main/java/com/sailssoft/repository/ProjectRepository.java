package com.sailssoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sailssoft.model.ProjectMaster;



@Repository
public interface ProjectRepository extends JpaRepository<ProjectMaster, Long> {


}
