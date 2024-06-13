package com.udhyog.jobposting.repository;


	
	import java.util.List;
	import java.util.Optional;

	import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

	import com.udhyog.jobposting.model.JobPosting;

	@Repository
	public interface JobPostingRepository extends JpaRepository<JobPosting,Integer> {

	              List<JobPosting> findByCompanyId(String companyId);

	            @Query("delete from JobPosting j where j.companyId = :companyId")
				void deleteById(String companyId);
	              
		

//		    Optional<JobPosting>  findByUsername(String companyId);
		

	}



