package com.esprit.microservice.service;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.esprit.microservice.Entity.Velo;
import com.esprit.microservice.repositories.VeloRepository;


@Service
public class VeloService {

	@Autowired
	private VeloRepository vr;
	public Velo addVelo(Velo v) {
		return vr.save(v);
	}
    
	public String updateVelo( Velo newVelo) {
		if(vr.findById(newVelo.getId()).isPresent()) {
			Velo existingVelo = vr.findById(newVelo.getId()).get();
			Long oldId=existingVelo.getId();
			existingVelo=newVelo;
			existingVelo.setId(oldId);
		
			 vr.save(existingVelo);
			 return "updated";
		}else
			return null;
	}
	public String deleteVelo(Long id) {
		if (vr.findById( id).isPresent()) {
			vr.deleteById( id);
			return " velo Supprimé ";
		}else 
			return "velo non supprimé";
	}

	public List<Velo> getAllVelos()
	{
		return vr.findAll();
	}
	public Velo findVelo(Long id)
	{ 
		return vr.findById(id).orElse(null);
	}
}
