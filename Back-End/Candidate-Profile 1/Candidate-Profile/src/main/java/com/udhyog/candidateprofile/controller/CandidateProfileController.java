package com.udhyog.candidateprofile.controller;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.service.CandidateProfileService;



	@RestController
	@RequestMapping("/candidates")
//	@CrossOrigin(origins = "http://localhost:3000")
	public class CandidateProfileController {

	    @Autowired
	    private CandidateProfileService candidateService;

	    @PostMapping("/candidates")
	    public ResponseEntity<String> saveCandidate(@RequestParam String firstname,
	                                                 @RequestParam String middlename,
	                                                 @RequestParam String lastname,
	                                                 @RequestParam String gender,
	                                                 @RequestParam String address,
	                                                 @RequestParam String contact,
	                                                 @RequestParam String skills,
	                                                 @RequestParam String others,
	                                                 @RequestParam String certifications,


	                                                 @RequestParam String email,
	                                                 @RequestParam MultipartFile image) {
	        try {
	            candidateService.saveCandidate( firstname, middlename, lastname,  gender, address, contact, skills, others, certifications,email, image);
	            return ResponseEntity.status(HttpStatus.OK).body("Candidate saved successfully");
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving candidate");
	        }
	    }

//	    @GetMapping("/candidate/{id}")
//	    public ResponseEntity<?> getCandidate(@PathVariable int id) {
//	        Optional<CandidateProfile> candidate = candidateService.getCandidate(id);
//	        if (candidate.isPresent()) {
//	            return ResponseEntity.status(HttpStatus.OK).body(candidate.get());
//	        } else {
//	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Candidate not found");
//	        }
//	    }
//	    @GetMapping("/candidate/{id}")
//		public Optional<CandidateProfile> getCandidate(@PathVariable int id) {
//			return candidateService.getCandidate(id);
//	    }
	//    
	    @GetMapping("/candidate/{email}")
		public Optional<CandidateProfile> getCandidateByEmail(@PathVariable String email) {
			return candidateService.getCandidateByEmail(email);
	    }
	//    
//	    @PutMapping("/candidate/{id}")
//	    public ResponseEntity<String> updateCandidate(@PathVariable int id,
//	                                                  @RequestParam(required = false) String middlename,
//	                                                  @RequestParam(required = false) String lastname,
//	                                                  @RequestParam(required = false) String gender,
//	                                                  @RequestParam(required = false) String address,
//	                                                  @RequestParam(required = false) String contact,
//	                                                  @RequestParam(required = false) String skills,
//	                                                  @RequestParam(required = false) String others,
//	                                                  @RequestParam(required = false) String certifications,
//	                                                  @RequestParam(required = false) MultipartFile image) {
//	        try {
//	            candidateService.updateCandidate(id, middlename, lastname, gender, address, contact, skills, others, certifications, image);
//	            return ResponseEntity.status(HttpStatus.OK).body("Candidate updated successfully");
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating candidate");
//	        }
//	    }

//	    @GetMapping("/candidate/{id}")
//	    public ResponseEntity<?> getCandidate(@PathVariable int id) {
//	        Optional<CandidateProfile> candidate = candidateService.getCandidate(id);
//	        if (candidate.isPresent()) {
//	            return ResponseEntity.status(HttpStatus.OK).body(candidate.get());
//	        } else {
//	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Candidate not found");
//	        }
//	    }
	    
	    
	    @PostMapping("/candidates/update")
	    public ResponseEntity<String> saveOrUpdateCandidate(@RequestParam String firstname,
	                                                         @RequestParam String middlename,
	                                                         @RequestParam String lastname,
	                                                         @RequestParam String gender,
	                                                         @RequestParam String address,
	                                                         @RequestParam String contact,
	                                                         @RequestParam String skills,
	                                                         @RequestParam String others,
	                                                         @RequestParam String certifications,
	                                                         @RequestParam String email,
	                                                         @RequestParam MultipartFile image) {
	        try {
	            Optional<CandidateProfile> existingCandidate = candidateService.getCandidateByEmail(email);
	            if (existingCandidate.isPresent()) {
	                // Candidate with the given email already exists, update the existing candidate
	                CandidateProfile existingProfile = existingCandidate.get();
	                existingProfile.setFirstname(firstname);
	                existingProfile.setMiddlename(middlename);
	                existingProfile.setLastname(lastname);
	                existingProfile.setGender(gender);
	                existingProfile.setAddress(address);
	                existingProfile.setContact(contact);
	                existingProfile.setSkills(skills);
	                existingProfile.setOthers(others);
	                existingProfile.setCertifications(certifications);
	                existingProfile.setImage(image.getBytes());

	                candidateService.saveOrUpdateCandidate(existingProfile);
	                return ResponseEntity.status(HttpStatus.OK).body("Candidate updated successfully");
	            } else {
	                // Candidate with the given email doesn't exist, create a new candidate
	                CandidateProfile newCandidate = new CandidateProfile();
	                newCandidate.setFirstname(firstname);
	                newCandidate.setMiddlename(middlename);
	                newCandidate.setLastname(lastname);
	                newCandidate.setGender(gender);
	                newCandidate.setAddress(address);
	                newCandidate.setContact(contact);
	                newCandidate.setSkills(skills);
	                newCandidate.setOthers(others);
	                newCandidate.setCertifications(certifications);
	                newCandidate.setEmail(email);
	                newCandidate.setImage(image.getBytes());

	                candidateService.saveOrUpdateCandidate(newCandidate);
	                return ResponseEntity.status(HttpStatus.OK).body("Candidate saved successfully");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving/updating candidate");
	        }
	    }

	}


	    
	    


