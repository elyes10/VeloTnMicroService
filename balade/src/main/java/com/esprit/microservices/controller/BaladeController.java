package com.esprit.microservices.controller;

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

import com.esprit.microservices.entity.Balade;
import com.esprit.microservices.service.BaladeService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BaladeController {
	@Autowired
	private BaladeService bs;
	
	@PostMapping("/addBalade")
    public Balade saveBalade(@RequestBody Balade bal)
    {
    	return bs.addBalade(bal);
    }
	
	@GetMapping("/Balades")
	public  List<Balade>  FindAllBalade()
	{
		return  bs.getAllBalades();
	}

	@DeleteMapping("/deleteBalade/{id}")
    public String deleteBalade(@PathVariable Long id)
    {
    	 bs.deleteBalade(id);
    	 return "supprimer";
    }

	@GetMapping("/BaladeById/{id}")
    public Balade findBaladeById(@PathVariable Long id) {
        return bs.findBalade(id);
    }
	
	@PutMapping("/updateBalade") 
    public String updateBalade(@RequestBody Balade bal) {
         bs.updateBalade(bal);
         return "updated";
    }
	
}