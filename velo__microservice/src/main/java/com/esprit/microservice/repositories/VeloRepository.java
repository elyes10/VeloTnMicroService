package com.esprit.microservice.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservice.Entity.Velo;


@Repository
public interface VeloRepository extends JpaRepository<Velo, Long> {

	
}
