package com.udhyog.employerregistration.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.io.Decoders;
//import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;

import java.security.Key;
import java.time.Instant;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import java.time.Instant;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtils {
	
	  @Value("${jwt.secretKey}")
	    private static String secretKey="123sadfasdfasdfasdfasdfasdfasdfasdfasdfas124123235";
	    private  JwtUtils()
	    {}

	    public static Map<String,String> generateToken(String username)
	    {
	        Date tokenCreationDate=new Date();

	        Date expiration=Date.from(Instant.now().plusSeconds(300));


	        String token= Jwts.builder()
	                .setSubject(username) //claims
	                .setIssuedAt(tokenCreationDate)
//	                .issuedAt(tokenCreationDate)
	                .setExpiration(expiration)
	                .signWith(SignatureAlgorithm.HS256,"SecretKey")
//	                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
	                .compact();

	        Map<String,String> tokenwithMessage=new LinkedHashMap<>();

	        tokenwithMessage.put("token",token);

	        tokenwithMessage.put("message","User has been successfully logged in...");

	        return tokenwithMessage;
	    }


//	    private static Key  getSecretKey()
//	    {
//	        byte [] array= Decoders.BASE64.decode(secretKey);
//	        return Keys.hmacShaKeyFor(array);
	//
//	    }


	}





