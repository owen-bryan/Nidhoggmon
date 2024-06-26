package com.owen.nidhoggmon;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class NidhoggmonApplication {

	private final static Logger logger = LoggerFactory.getLogger(NidhoggmonApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(NidhoggmonApplication.class, args);
		logger.info("Application started");
	}

}
