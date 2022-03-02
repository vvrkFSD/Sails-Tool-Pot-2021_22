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
@Table(name="Technology_Details")
public class Tech_Details{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long tech_id;
	private String tech_name;
	private String url;
	
}