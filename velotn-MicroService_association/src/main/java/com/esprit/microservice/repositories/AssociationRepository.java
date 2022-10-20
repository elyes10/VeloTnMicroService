package com.esprit.microservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservice.entities.Association;

public interface AssociationRepository extends JpaRepository <Association, Long> {

}
