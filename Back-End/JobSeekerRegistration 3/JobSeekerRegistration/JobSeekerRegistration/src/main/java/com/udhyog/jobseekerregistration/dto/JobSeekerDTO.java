package com.udhyog.jobseekerregistration.dto;

public class JobSeekerDTO {

	private String emailId;
    private String password;
    
    JobSeekerDTO(){
		
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
	public JobSeekerDTO(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
	}

    
}




