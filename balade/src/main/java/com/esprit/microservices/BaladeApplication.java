package com.esprit.microservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BaladeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaladeApplication.class, args);
	}

}
