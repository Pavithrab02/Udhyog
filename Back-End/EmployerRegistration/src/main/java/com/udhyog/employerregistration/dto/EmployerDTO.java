package com.udhyog.employerregistration.dto;

public class EmployerDTO {

	

		
		private String emailId;
	    private String password;
	    
	    public EmployerDTO(){
			
		}
		public String getEmailId() {
			return emailId;
		}
		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public  EmployerDTO(String emailId, String password) {
			super();
			this.emailId = emailId;
			this.password = password;
		}

	    
	}


