package com.secureApi.app.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000/")
public class AppController {
	
	
	@GetMapping
	public String testApp() {
		return "Hello Spring Security!";
	}

}
