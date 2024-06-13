package com.udhyog.jobapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.util.unit.DataSize;

import com.udhyog.jobapplication.filter.AuthorizationFilter;

import jakarta.servlet.MultipartConfigElement;

@SpringBootApplication
public class JobApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobApplication.class, args);
	}
	
	@Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize(DataSize.ofMegabytes(10));
        factory.setMaxRequestSize(DataSize.ofMegabytes(10));
        return factory.createMultipartConfig();
    }
	
	@Bean
	public FilterRegistrationBean filterRegistrationBean()
	{
		FilterRegistrationBean<AuthorizationFilter> filterRegistrationBean=new FilterRegistrationBean<>();
		AuthorizationFilter authorizationFilter=new AuthorizationFilter();

		filterRegistrationBean.setFilter(authorizationFilter);
		filterRegistrationBean.addUrlPatterns("/udhyog/*");

		return filterRegistrationBean;
	}

}
