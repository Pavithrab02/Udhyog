package com.udhyog.candidateprofile.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.udhyog.candidateprofile.model.CandidateProfile;


	@Repository
	public interface CandidateProfileRepository extends JpaRepository<CandidateProfile, Integer> {

		Optional<CandidateProfile> findByEmail(String email);

		

	}

