package com.udhyog.jobposting.filter;

import java.io.IOException;

import org.springframework.http.HttpMethod;
import org.springframework.web.filter.GenericFilterBean;


import com.udhyog.jobposting.util.JwtUtil;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


	
public class AuthorizationFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
 
        HttpServletRequest  httpServletRequest=(HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse=(HttpServletResponse) servletResponse;
 
//Preflighted requests in CORS
 
        if(httpServletRequest.getMethod().equalsIgnoreCase(HttpMethod.OPTIONS.name()))
        {
            filterChain.doFilter(servletRequest,servletResponse);
        }
 
else {
    //Read the Authorization Header from the Request
 
          String header= httpServletRequest.getHeader("Authorization");
 
          if(header == null && !header.startsWith("Bearer "))
          {
              throw new ServletException("Authorization Header not Found....");
          }
 
          else
          {
              try {
                  String token = header.substring(7);
 
                  System.out.println(token);
                  System.out.println("Payload " + JwtUtil.validateToken(token));
                  Claims claims = JwtUtil.validateToken(token);
 
                  String payload = claims.getSubject();
 
                  System.out.println("Payload " + payload);
                  httpServletRequest.setAttribute("emailId", payload);
                  filterChain.doFilter(servletRequest, servletResponse);
              }
              catch(Exception exe)
              {
                  httpServletResponse.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,"Token is not Valid....");
              }
          }
}
 
 
 
    }
}