package com.esprit.microservice.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.microservice.entities.Association;
import com.esprit.microservice.services.AssociationService;



@RestController
@CrossOrigin
public class AssociationController {
	
	@Autowired
	private AssociationService vs;
	
	@PostMapping("/addAssociation")
    public Association saveAssociation(@RequestBody Association ass)
    {
    	
    	return vs.addAssociation(ass);
    }
	@GetMapping("/Associations")
	public  List<Association>  FindAllAssociation()
	{
		return  vs.getAllAssociations();
	}

	@DeleteMapping("/deleteAssociation/{id}")
    public String deleteAssociation(@PathVariable Long id)
    {
    	 vs.deleteAssociation(id);
    	 return "supprimer";
    }

	@GetMapping("/AssociationById/{id}")
    public Association findAssociationById(@PathVariable Long id) {
        return vs.findAssociation(id);
    }
	
	@PutMapping("/updateAssociation") 
    public String updateAssociation(@RequestBody Association ass) {
         vs.updateAssociation(ass);
         return "updated";
    }
}
