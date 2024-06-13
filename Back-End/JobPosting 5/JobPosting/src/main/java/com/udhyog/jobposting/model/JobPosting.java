package com.udhyog.jobposting.model;


import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jobposting")
public class JobPosting {
	
	
		
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Basic(optional = false)
		@Column(name = "jobId", unique = true, nullable = false)
		@Id
		private Integer jobId;

//		@ManyToOne
//		@JoinColumn(name = "companyId")
		//private Company company;

		
		@Column(name = "companyId")
		private String companyId;

		@Column(name = "companyname")
		private String companyname;
		
		@Column(name = "jobrole")
		private String jobrole;
		
		@Column(name = "description")
		private String description;
		
      	@Column(name = "requiredskills")
		private String requiredskills;
      	
      	@Column(name = "requiredqualification")
		private String requiredqualification;
      	
		@Column(name = "location")
		private String location;

		@Column(name = "salary")
		private String salary;
		
		@Column(name = "experience")
		private String experience;

		@Column(name = "applicationdeadline")
	    
	    private String applicationdeadline;

	    @Column(name = "postDate")
//	    @JsonFormat(pattern = "dd-MM-yyyy")
	    private String postDate;
		

		public Integer getJobId() {
			return jobId;
		}
		public void setJobId(Integer jobId) {
			this.jobId = jobId;
		}
		public String getCompanyId() {
			return companyId;
		}
		public void setCompanyId(String companyId) {
			this.companyId = companyId;
		}
		public String getCompanyname() {
			return companyname;
		}
		public void setCompanyname(String jobtitle) {
			this.companyname = jobtitle;
		}
		public String getJobrole() {
			return jobrole;
		}
		public void setJobrole(String jobrole) {
			this.jobrole = jobrole;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getRequiredskills() {
			return requiredskills;
		}
		public void setRequiredskills(String requiredskills) {
			this.requiredskills = requiredskills;
		}
		public String getRequiredqualification() {
			return requiredqualification;
		}
		public void setRequiredqualification(String requiredqualification) {
			this.requiredqualification = requiredqualification;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getSalary() {
			return salary;
		}
		public void setSalary(String salary) {
			this.salary = salary;
		}
		public String getExperience() {
			return experience;
		}
		public void setExperience(String experience) {
			this.experience = experience;
		}
		public String getApplicationdeadline() {
			return applicationdeadline;
		}
		public void setApplicationdeadline(String applicationdeadline) {
			this.applicationdeadline = applicationdeadline;
		}
		public String getPostDate() {
			return postDate;
		}
		public void setPostDate(String postDate) {
			this.postDate = postDate;
		}
		JobPosting(){
			
		}
	
		
		
		public JobPosting( int jobId,String companyId, String companyname, String jobrole, String description,
				String requiredskills, String requiredqualification, String location, String salary, String experience,
				String applicationdeadline, String postDate) {
			
			this.jobId=jobId;
			this.companyId = companyId;
			this.companyname=companyname;
			this.jobrole = jobrole;
			this.description = description;
			this.requiredskills = requiredskills;
			this.requiredqualification = requiredqualification;
			this.location = location;
			this.salary = salary;
			this.experience = experience;
			this.applicationdeadline = applicationdeadline;
			this.postDate = postDate;
		}
			
		
		
		
		
}
