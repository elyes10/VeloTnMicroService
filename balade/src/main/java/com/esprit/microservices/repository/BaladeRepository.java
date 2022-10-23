package com.esprit.microservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.microservices.entity.Balade;

@Repository
public interface BaladeRepository extends JpaRepository <Balade, Long> {

}