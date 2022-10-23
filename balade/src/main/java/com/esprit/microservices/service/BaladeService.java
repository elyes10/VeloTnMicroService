package com.esprit.microservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esprit.microservices.entity.Balade;
import com.esprit.microservices.repository.BaladeRepository;

@Service
public class BaladeService {
	
	@Autowired
	private BaladeRepository br;
	
	public Balade addBalade(Balade a) {
		return br.save(a);
	}
    
	public String updateBalade( Balade newBal) {
		if(br.findById(newBal.getId()).isPresent()) {
			Balade existingBalade = br.findById(newBal.getId()).get();
			Long oldId=existingBalade.getId();
			existingBalade=newBal;
			existingBalade.setId(oldId);
		
			 br.save(existingBalade);
			 return "updated";
		}else
			return null;
	}
	
	public String deleteBalade(Long id) {
		if (br.findById( id).isPresent()) {
			br.deleteById( id);
			return " Balade Supprimé ";
		}else 
			return "Balade non supprimé";
	}

	public List<Balade> getAllBalades()
	{
		return br.findAll();
	}
	
	public Balade findBalade(Long id)
	{ 
		return br.findById(id).orElse(null);
	}
	
}