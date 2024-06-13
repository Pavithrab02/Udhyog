package com.udhyog.employerregistration.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;

@Entity

public class Employer {

	
		@Id
	    private String emailId;

	    private String name;
	    private String companyname;
	    private String contactno;
	    private String password;
	    
	    public Employer(){
	    	
	    }
		public String getEmailId() {
			return emailId;
		}
		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getCompanyname() {
			return companyname;
		}
		public void setCompanyname(String companyname) {
			this.companyname = companyname;
		}
		public String getContactno() {
			return contactno;
		}
		public void setContactno(String contactno) {
			this.contactno = contactno;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Employer(String emailId, String name, String companyname, String contactno, String password) {
			super();
			this.emailId = emailId;
			this.name = name;
			this.companyname = companyname;
			this.contactno = contactno;
			this.password = password;
		}


	}

