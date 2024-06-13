package com.udhyog.jobapplication.service;
////import java.util.List;
////import java.util.Optional;
////
////import org.slf4j.Logger;
////import org.slf4j.LoggerFactory;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.MediaType;
////import org.springframework.http.ResponseEntity;
////import org.springframework.stereotype.Service;
////import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.RequestParam;
////import org.springframework.web.multipart.MultipartFile;
////
////import com.udhyog.jobapplication.model.Application;
////import com.udhyog.jobapplication.repository.JobApplicationRepository;
////
////
////
////
////
////
////@Service
////public class JobApplicationServiceImpl implements JobApplicationService {
////
////	private JobApplicationRepository jobApplicationRepository;
////	 JobApplicationServiceImpl(JobApplicationRepository jobApplicationRepository) {
////		
////		this.jobApplicationRepository = jobApplicationRepository;
////	}
////	
////     @Override
////	public Application addJob(Application jobapplication) {
////		
////		return jobApplicationRepository.save(jobapplication);
////	}
////	
////	@Override
////	public Optional<Application> getJobById(String id) {
////		
////		 return jobApplicationRepository.findById(id);
////	}
////	
////	@Override
////	public List<Application> getJobByCompanyId(String companyId) {
////		
////        return jobApplicationRepository.findByCompanyId(companyId);
////    }
////	
////	@Override
////	public List<Application> getAllApplications() {
////        return jobApplicationRepository.findAll();
////    }
////
////	@Override
////	public void saveJobApplication(Application jobApplication) {
////			jobApplicationRepository.save(jobApplication);
////		
////	}
////	
////	
////
////	
////}
//
//
//
//import com.mongodb.BasicDBObject;
//import com.mongodb.DBObject;
//import com.mongodb.client.gridfs.model.GridFSFile;
//import com.udhyog.jobapplication.model.Application;
//
//import org.apache.commons.io.IOUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.data.mongodb.gridfs.GridFsOperations;
//import org.springframework.data.mongodb.gridfs.GridFsTemplate;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//@Service
//public class JobApplicationServiceImpl {
//
//    @Autowired
//    private GridFsTemplate template;
//
//    @Autowired
//    private GridFsOperations operations;
//
//    public String addFile(MultipartFile upload) throws IOException {
//
//        DBObject metadata = new BasicDBObject();
//        metadata.put("fileSize", upload.getSize());
//
//        Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(), upload.getContentType(), metadata);
//
//        return fileID.toString();
//    }
//  
//
//    public Application downloadFile(String id) throws IOException {
//
//        GridFSFile gridFSFile = template.findOne( new Query(Criteria.where("_id").is(id)) );
//
//        Application application = new Application();
//
//        if (gridFSFile != null && gridFSFile.getMetadata() != null) {
//        	
//        	application.setJobId(gridFSFile.);
//            
//            application.setFile( IOUtils.toByteArray(operations.getResource(gridFSFile).getInputStream()) );
//        }
//
//        return application;
//    }
//
//}



import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.jobapplication.model.Application;
import com.udhyog.jobapplication.repository.JobApplicationRepository;


@Service

public class JobApplicationServiceImpl implements JobApplicationService{

	@Autowired
	private JobApplicationRepository jobApplicationRepository;
	
	@Override
	 public void saveApplication(String fullName, String contactNo, String skills, String status,String experience, String candidateId, int jobId, String companyId, MultipartFile file) throws IOException {
	        Application application = new Application();
	        application.setFullName(fullName);
	        application.setStatus(status);
	        application.setContactNo(contactNo);
	        application.setSkills(skills);
	        application.setExperience(experience);
	        application.setCandidateId(candidateId);
	        application.setJobId(jobId);
	        application.setCompanyId(companyId);
	        application.setFile(convertMultipartFileToByteArray(file));
	     
	        
	        jobApplicationRepository.save(application);
	    }
	    
	    private byte[] convertMultipartFileToByteArray(MultipartFile file) throws IOException {
	        return file.getBytes();
	    }

		@Override
		public List<Application> getAllApplications() {
		
			return jobApplicationRepository.findAll();
		}

		@Override
		public List<Application> getApplicationsByCompanyId(String companyId) {
			return jobApplicationRepository.findByCompanyId(companyId);
		}
		@Override
		public List<Application> getApplicationsByCandidateId(String candidateId) {
			return jobApplicationRepository.findByCandidateId(candidateId);
		}
		
		
		@Override
		public void   updateRecordStatus(String id, String newStatus) {
	        Optional<Application> optionalRecord = jobApplicationRepository.findById(id);
	        
	        System.out.println(optionalRecord);
	        if (optionalRecord.isPresent()) {
	            Application existingRecord = optionalRecord.get();
	            existingRecord.setStatus(newStatus);
	            jobApplicationRepository.save(existingRecord);
	           
	           
	        } else {
	            throw new RuntimeException("Record with id " + id + " not found");
	        }
	    }
}
	




















