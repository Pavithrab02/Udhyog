package com.udhyog.jobapplication.model;

import org.bson.types.Binary;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Id;



@Document(collection = "jobApplication")
public class Application {
   
   @Id
   private String id;
   private int jobId;
   private String fullName;
   private String contactNo;
   private String skills;
   private String candidateId;
   private String companyId;
   private String experience;
   private byte[] file;
   private String status;
 
  
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getId() {
	return id;
}
public void setId(String id) {
	id = id;
}
public int getJobId() {
	return jobId;
}
public void setJobId(int jobId) {
	this.jobId = jobId;
}
public String getFullName() {
	return fullName;
}
public void setFullName(String fullName) {
	this.fullName = fullName;
}
public String getContactNo() {
	return contactNo;
}
public void setContactNo(String contactNo) {
	this.contactNo = contactNo;
}
public String getSkills() {
	return skills;
}
public void setSkills(String skills) {
	this.skills = skills;
}
public String getCandidateId() {
	return candidateId;
}
public void setCandidateId(String candidateId) {
	this.candidateId = candidateId;
}
public String getCompanyId() {
	return companyId;
}
public void setCompanyId(String companyId) {
	this.companyId = companyId;
}
public String getExperience() {
	return experience;
}
public void setExperience(String experience) {
	this.experience = experience;
}
public byte[] getFile() {
	return file;
}
public void setFile(byte[] file) {
	this.file = file;
}
public Application(){
	
}
public Application(String id, int jobId, String fullName, String contactNo, String skills, String candidateId,
		String companyId, String experience, byte[] file, String status) {
	super();
	this.id = id;
	this.jobId = jobId;
	this.fullName = fullName;
	this.contactNo = contactNo;
	this.skills = skills;
	this.candidateId = candidateId;
	this.companyId = companyId;
	this.experience = experience;
	this.file = file;
	this.status = status;
}


}
