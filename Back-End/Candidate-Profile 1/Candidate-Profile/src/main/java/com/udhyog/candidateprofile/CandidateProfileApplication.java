package com.udhyog.candidateprofile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.udhyog.candidateprofile.filter.AuthorizationFilter;



@SpringBootApplication
public class CandidateProfileApplication {

	public static void main(String[] args) {
		SpringApplication.run(CandidateProfileApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean filterRegistrationBean()
	{
		FilterRegistrationBean<AuthorizationFilter> filterRegistrationBean=new FilterRegistrationBean<>();
		AuthorizationFilter authorizationFilter=new AuthorizationFilter();

		filterRegistrationBean.setFilter(authorizationFilter);
		filterRegistrationBean.addUrlPatterns("/candidates/*");

		return filterRegistrationBean;
	}
}
