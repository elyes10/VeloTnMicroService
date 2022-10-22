package com.esprit.microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class VeloMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(VeloMicroserviceApplication.class, args);
		System.out.println( "Hello World!" );  
	}

}
