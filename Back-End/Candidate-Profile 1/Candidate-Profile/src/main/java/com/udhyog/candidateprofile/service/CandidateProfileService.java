package com.udhyog.candidateprofile.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.udhyog.candidateprofile.model.CandidateProfile;

public interface CandidateProfileService {
	
	Optional<CandidateProfile> getCandidate(int id);

	
	CandidateProfile saveCandidate(String firstname, String middlename, String lastname, String gender,
			String address, String contact, String skills, String others, String certifications, String email,
			MultipartFile image) throws IOException;


	void saveOrUpdateCandidate(CandidateProfile candidateProfile);


	Optional<CandidateProfile> getCandidateByEmail(String email);


}
