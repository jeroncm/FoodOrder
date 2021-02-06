package com.demo.authentication.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.authentication.exception.UserAlreadyExistsException;
import com.demo.authentication.model.UserDb;
import com.demo.authentication.security.AppUserDetailsService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/users")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;
	public static List<UserDetails> userDetailList = new ArrayList<>();
	public UserController() {
		super();

	}
//signup
	@PostMapping("")
	void signup(@RequestBody @Valid UserDb user) throws UserAlreadyExistsException {
		LOGGER.info("in user Starts");
		appUserDetailsService.signup(user);
	}

}
