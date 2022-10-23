package com.esprit.microservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Association {
	private static final long serialVersionUID = 6;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long idAssociation;
	private int numero;
	private String name, email, address,url;
	
	@Override
	public String toString() {
		return "Association [idAssociation=" + idAssociation + ", numero=" + numero + ", name=" + name + ", email="
				+ email + ", address=" + address + ", url=" + url + "]";
	}
	public Association(int numero, String name, String email, String address, String url) {
		super();
		this.numero = numero;
		this.name = name;
		this.email = email;
		this.address = address;
		this.url = url;
	}
	public Association() {
		
	}
	public Long getIdAssociation() {
		return idAssociation;
	}
	public void setIdAssociation(Long idAssociation) {
		this.idAssociation = idAssociation;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
