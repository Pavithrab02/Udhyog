package com.udhyog.jobseekerregistration.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


	@Entity
	
public class JobSeeker {

	
			@Id
		    private String emailId;

		    private String firstname;
		    private String lastname;
		    private String password;
		    
		    JobSeeker(){
		    	
		    }

			public String getEmailId() {
				return emailId;
			}

			public void setEmailId(String emailId) {
				this.emailId = emailId;
			}

			public String getFirstname() {
				return firstname;
			}

			public void setFirstname(String firstname) {
				this.firstname = firstname;
			}

			public String getLastname() {
				return lastname;
			}

			public void setLastname(String lastname) {
				this.lastname = lastname;
			}

			public String getPassword() {
				return password;
			}

			public void setPassword(String password) {
				this.password = password;
			}

			public JobSeeker(String emailId, String firstname, String lastname, String password) {
				super();
				this.emailId = emailId;
				this.firstname = firstname;
				this.lastname = lastname;
				this.password = password;
			}
		


	}

