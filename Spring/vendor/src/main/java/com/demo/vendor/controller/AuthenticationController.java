package com.demo.vendor.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

//authenticates the login credentials
	@GetMapping("/authenticate")
	public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
		Map<String, String> authenticationMap = new HashMap<String, String>();
		LOGGER.info("auth start");
		LOGGER.debug("authheader" + authHeader);
		String role = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString();
		authenticationMap.put("role", role);
		String user = getUser(authHeader);
		authenticationMap.put("user", user);
		authenticationMap.put("token", generateJwt(user));
		LOGGER.info("auth end");
		return authenticationMap;
	}

//gets user details
	private String getUser(String authHeader) {
		LOGGER.info("getuser start");
		String decodetext = authHeader.substring(authHeader.indexOf(" ") + 1);
		byte[] decode = Base64.getDecoder().decode(decodetext);
		LOGGER.debug("decodetext" + decode);
		String decodeString = new String(decode);
		LOGGER.debug("decodeString" + decodeString);
		String user = decodeString.substring(0, decodeString.indexOf(":"));
		LOGGER.debug("user" + user);
		LOGGER.info("getuser end");
		return user;
	}

//generates jwt
	private String generateJwt(String user) {
		LOGGER.info("generatjwt start");
		JwtBuilder builder = Jwts.builder();
		builder.setSubject(user);
		builder.setIssuedAt(new Date());
		builder.setExpiration(new Date((new Date()).getTime() + 1200000));
		builder.signWith(SignatureAlgorithm.HS256, "secretkey");
		String token = builder.compact();
		LOGGER.info("generatjwt end");
		return token;
	}

}
