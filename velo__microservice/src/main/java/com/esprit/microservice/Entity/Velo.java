package com.esprit.microservice.Entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Velo implements Serializable{
	private static final long serialVersionUID = 6;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long Id;
	private int Stock, Price;
	private String Name, Description, Image;
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public int getStock() {
		return Stock;
	}
	public void setStock(int stock) {
		Stock = stock;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getImage() {
		return Image;
	}
	public Velo(Long id, int stock, int price, String name, String description, String image) {
		super();
		Id = id;
		Stock = stock;
		Price = price;
		Name = name;
		Description = description;
		Image = image;
	}
	public void setImage(String image) {
		Image = image;
	}
	
	
	public Velo() {
		
	}
	@Override
	public String toString() {
		return "Fournisseur [Id=" + Id + ", Stock=" + Stock + ", Price=" + Price + ", Name=" + Name + ", Description="
				+ Description + ", Image=" + Image + "]";
	}
	
	
	
	
	
}
