package com.esprit.microservices.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Balade implements Serializable{
	
	private static final long serialVersionUID = 6;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String description;
	private String destination;
	private String date;
	
	public Balade() {
		super();
	}

	public Balade(long id, String name, String description, String destination, String date) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.destination = destination;
		this.date = date;
	}

	public Balade(String name, String description, String destination, String date) {
		super();
		this.name = name;
		this.description = description;
		this.destination = destination;
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "balade [id=" + id + ", name=" + name + ", description=" + description + ", destination=" + destination
				+ ", date=" + date + "]";
	}
}