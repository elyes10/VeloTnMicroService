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

import com.esprit.microservice.Entity.Velo;
import com.esprit.microservice.service.VeloService;
@RestController
@CrossOrigin
public class VeloController {
	
	@Autowired
	private VeloService vs;
	
	@PostMapping("/addvelo")
    public Velo saveVelo(@RequestBody Velo velo)
    {
    	
    	return vs.addVelo(velo);
    }
	@GetMapping("/velos")
	public  List<Velo>  FindAllVelo(Velo v)
	{
		return  vs.getAllVelos();
	}

	@DeleteMapping("/deleteVelo/{id}")
    public String deleteVelo(@PathVariable Long id)
    {
    	 vs.deleteVelo(id);
    	 return "supprimer";
    }

	@GetMapping("/veloById/{id}")
    public Velo findVeloById(@PathVariable Long id) {
        return vs.findVelo(id);
    }
	
	@PutMapping("/updateVelo") 
    public String updateVelo(@RequestBody Velo v) {
         vs.updateVelo(v);
         return "updated";
    }
}
