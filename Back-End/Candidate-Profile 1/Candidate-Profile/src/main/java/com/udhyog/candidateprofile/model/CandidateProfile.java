package com.udhyog.candidateprofile.model;

	
	import jakarta.persistence.Basic;
	import jakarta.persistence.Column;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Lob;
	import jakarta.persistence.Table;

	@Entity
	@Table(name = "candidateprof")

	public class CandidateProfile {
			
			
				@Id
				@GeneratedValue(strategy = GenerationType.IDENTITY)
				@Basic(optional = false)
				@Column(name = "candidateId", unique = true, nullable = false)
				private Integer candidateId ;

				
				@Column(name = "firstname")
				private String firstname;
				
				@Column(name = "middlename")
				private String middlename;
				
				@Column(name = "lastname")
				private String lastname;
				
				@Column(name = "email")
				private String email;
				
				@Column(name = "contact")
				private String contact;
				
				@Column(name = "gender")
				private String gender;
				
				@Column(name = "address")
				private String address;
				
				@Column(name = "skills")
				private String skills;
				
				@Lob
			    @Column(name = "image", columnDefinition="BLOB")
			    private byte[] image;
				
				@Column(name = "certifications")
				private String certifications;
				
				@Column(name = "others")
				private String others;

				public Integer getCandidateId() {
					return candidateId;
				}

				public void setCandidateId(Integer candidateId) {
					this.candidateId = candidateId;
				}

				public String getFirstname() {
					return firstname;
				}

				public void setFirstname(String firstname) {
					this.firstname = firstname;
				}

				public String getMiddlename() {
					return middlename;
				}

				public void setMiddlename(String middlename) {
					this.middlename = middlename;
				}

				public String getLastname() {
					return lastname;
				}

				public void setLastname(String lastname) {
					this.lastname = lastname;
				}

				public String getContact() {
					return contact;
				}

				public void setContact(String contact) {
					this.contact = contact;
				}

				public String getGender() {
					return gender;
				}

				public void setGender(String gender) {
					this.gender = gender;
				}

				public String getAddress() {
					return address;
				}

				public void setAddress(String address) {
					this.address = address;
				}

				public String getSkills() {
					return skills;
				}

				public void setSkills(String skills) {
					this.skills = skills;
				}

				public byte[] getImage() {
					return image;
				}

				public void setImage(byte[] image) {
					this.image = image;
				}

				public String getCertifications() {
					return certifications;
				}

				public void setCertifications(String certifications) {
					this.certifications = certifications;
				}

				public String getOthers() {
					return others;
				}

				public void setOthers(String others) {
					this.others = others;
				}
				
				public String getEmail() {
					return email;
				}
				
				
				public void setEmail(String email) {
					this.email = email;
				}
				
				

				public CandidateProfile(Integer candidateId, String firstname, String middlename, String lastname, String email,
						String contact, String gender, String address, String skills, byte[] image, String certifications,
						String others) {
					super();
					this.candidateId = candidateId;
					this.firstname = firstname;
					this.middlename = middlename;
					this.lastname = lastname;
					this.email=email;
					this.contact = contact;
					this.gender = gender;
					this.address = address;
					this.skills = skills;
					this.image = image;
					this.certifications = certifications;
					this.others = others;
				}

				public CandidateProfile() {
					super();
					// TODO Auto-generated constructor stub
				}

				public void setId(Integer id) {
			        this.candidateId = id;
			    }
				
				
				
				
				
				
	}



