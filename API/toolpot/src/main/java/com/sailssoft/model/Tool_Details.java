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


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="tool_details")
public class Tool_Details{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long tool_id;
	private String tool_name;
	private String description;
	private String url;
	
}
