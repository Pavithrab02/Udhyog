package com.udhyog.candidateprofile.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.candidateprofile.model.CandidateProfile;
import com.udhyog.candidateprofile.repository.CandidateProfileRepository;



	
	
	
	
	@Service
	public class CandidateProfileServiceImp implements CandidateProfileService {

		@Autowired
	    private CandidateProfileRepository candidateRepository;

	    @Override
	    public CandidateProfile saveCandidate(String firstname,String middlename, String lastname, String gender,String address,String contact,String skills,String others,String certifications, String email,MultipartFile image) throws IOException {
	        CandidateProfile candidate = new CandidateProfile();
	        candidate.setFirstname(firstname);
	        candidate.setLastname(lastname);
	        candidate.setMiddlename(middlename);
	        candidate.setContact(contact);
	        candidate.setGender(gender);
	        candidate.setSkills(skills);
	        candidate.setCertifications(certifications);
	        candidate.setOthers(others);
	        candidate.setImage(image.getBytes());
	        return candidateRepository.save(candidate);
	    }

	    @Override
	    public Optional<CandidateProfile> getCandidate(int  id) {
	        return candidateRepository.findById(id);
	    }
	    @Override
	    public void saveOrUpdateCandidate(CandidateProfile candidateProfile) {
	    	candidateRepository.save(candidateProfile);
	    }
	    @Override
	    public Optional<CandidateProfile> getCandidateByEmail(String email) {
	        return candidateRepository.findByEmail(email);
	    }

	}

