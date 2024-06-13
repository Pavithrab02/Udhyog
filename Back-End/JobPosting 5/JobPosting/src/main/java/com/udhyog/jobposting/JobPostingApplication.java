package com.udhyog.jobposting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.udhyog.jobposting.filter.AuthorizationFilter;

@SpringBootApplication
public class JobPostingApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobPostingApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean filterRegistrationBean()
	{
		FilterRegistrationBean<AuthorizationFilter> filterRegistrationBean=new FilterRegistrationBean<>();
		AuthorizationFilter authorizationFilter=new AuthorizationFilter();

		filterRegistrationBean.setFilter(authorizationFilter);
		filterRegistrationBean.addUrlPatterns("/api/*");

		return filterRegistrationBean;
	}


}
