package com.sailssoft.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="project_master")
public class ProjectMaster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long project_id;
	private String project_name;
	private String description;
	private Date start_date;
	private Date end_date;
	private String status;
	
	
}
