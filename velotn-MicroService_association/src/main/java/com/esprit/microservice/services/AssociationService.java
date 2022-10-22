package com.esprit.microservice.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.esprit.microservice.entities.Association;
import com.esprit.microservice.repositories.AssociationRepository;


@Service
public class AssociationService {

	@Autowired
	private AssociationRepository vr;
	public Association addAssociation(Association a) {
		return vr.save(a);
	}
    
	public String updateAssociation( Association newAss) {
		if(vr.findById(newAss.getIdAssociation()).isPresent()) {
			Association existingAssociation = vr.findById(newAss.getIdAssociation()).get();
			Long oldId=existingAssociation.getIdAssociation();
			existingAssociation=newAss;
			existingAssociation.setIdAssociation(oldId);
		
			 vr.save(existingAssociation);
			 return "updated";
		}else
			return null;
	}
	public String deleteAssociation(Long id) {
		if (vr.findById( id).isPresent()) {
			vr.deleteById( id);
			return " Association Supprimé ";
		}else 
			return "Association non supprimé";
	}

	public List<Association> getAllAssociations()
	{
		return vr.findAll();
	}
	public Association findAssociation(Long id)
	{ 
		return vr.findById(id).orElse(null);
	}
}
