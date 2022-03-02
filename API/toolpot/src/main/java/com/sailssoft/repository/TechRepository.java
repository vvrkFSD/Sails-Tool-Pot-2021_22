package com.sailssoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sailssoft.model.Tech_Details;



@Repository
public interface TechRepository extends JpaRepository<Tech_Details, Long> {

}
