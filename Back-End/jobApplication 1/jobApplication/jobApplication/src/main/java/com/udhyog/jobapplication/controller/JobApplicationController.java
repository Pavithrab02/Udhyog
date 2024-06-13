package com.udhyog.jobapplication.controller;
////
////import java.util.List;
////import java.util.Optional;
////
////import org.bson.BsonBinarySubType;
////import org.bson.types.Binary;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.web.bind.annotation.CrossOrigin;
////import org.springframework.web.bind.annotation.GetMapping;
////import org.springframework.web.bind.annotation.PathVariable;
////import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.RequestBody;
////import org.springframework.web.bind.annotation.RequestMapping;
////import org.springframework.web.bind.annotation.RequestParam;
////import org.springframework.web.bind.annotation.RestController;
////import org.springframework.web.multipart.MultipartFile;
////import org.springframework.data.mongodb.core.MongoTemplate;
////
////import com.udhyog.jobapplication.model.Application;
//import com.udhyog.jobapplication.service.JobApplicationService;
////
////
////
////@RestController
////@RequestMapping("/api")
////@CrossOrigin(origins ="http://localhost:3000") 
////public class JobApplicationController {
////	
////	@Autowired 
////	private JobApplicationService jobApplicationService;
////	
////	
////	@PostMapping("/jobApplication")
////	public String singleFileUpload(@RequestParam("file") MultipartFile multipart, @RequestParam("email") String email) {
////	    try {
////	         Application application = new Application();
////	        application.setJobId(application.getJobId());
////	        application.setFullName(application.getFullName());
////	        application.setSkills(application.getSkills());
////	        application.setContactNo(application.getContactNo());
////	        application.setExperience(application.getExperience());
////	        application.setCandidateId(application.getCandidateId());
////	        application.setResumePath(new Binary(BsonBinarySubType.BINARY, multipart.getBytes()));
////	        mongoTemplate.insert(application);
////	        System.out.println(application);
////	    } catch (Exception e) {
////	        e.printStackTrace();
////	        return "failure";
////	    }
////	    return "success";
////	}
////	
////	@GetMapping("/jobApplication")
////    public List<Application> getAllApplications() {
////        return jobApplicationService.getAllApplications();
////    }
////	
////	@GetMapping("/jobApplication/findJob/{id}")
////	public Optional<Application> getJobById(@PathVariable String id) {
////		return jobApplicationService.getJobById(id);
////	}
////	
////	@GetMapping("/jobApplication/getJob/{companyId}")
////    public List<Application> getJobsByCompanyId(@PathVariable String companyId) {
////       
////          return   jobApplicationService.getJobByCompanyId(companyId);
////           
////    }
////		
////
////	
////
////}
//
//
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.udhyog.jobapplication.model.Application;
//
//import java.io.IOException;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@CrossOrigin("http://localhost:3000/")
//@RequestMapping("file")
//public class JobApplicationController {
//
//    @Autowired
//    private JobApplicationService applicationService;
//
//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file) throws IOException {
//        return new ResponseEntity<>(applicationService.addFile(file), HttpStatus.OK);
//    }
//   
//    @GetMapping("/jobApplication")
//    public List<Application> getAllApplications() {
//      return applicationService.getAllApplications();
//      }
//	
//	@GetMapping("/jobApplication/findJob/{id}")
//	public Optional<Application> getJobById(@PathVariable String id) {
//		return applicationService.getJobById(id);
//	}
//	
//	
//	@GetMapping("/jobApplication/getJob/{companyId}")
//	public List<Application> getJobsByCompanyId(@PathVariable String companyId) {
//     
//        return   applicationService.getJobByCompanyId(companyId);
//         
//	}
//
//    @GetMapping("/download/{id}")
//    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
//        Application apply = applicationService.downloadFile(id);
//
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + apply.getFile() + "\"")
//                .body(new ByteArrayResource(apply.getFile()));
//    }
//
//}
//


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.apache.hc.core5.http.protocol.HttpContext;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.udhyog.jobapplication.model.Application;
import com.udhyog.jobapplication.service.JobApplicationService;




@RestController
@RequestMapping("/udhyog")
//@CrossOrigin(origins = "http://localhost:3000") 

//@CrossOrigin(allowedHeaders = "*" ) 
//origins ="http://localhost:3000",
public class JobApplicationController {
    
    @Autowired
    private JobApplicationService applicationService;

    @PostMapping("/applications")
    public ResponseEntity<String> saveApplication(
            @RequestParam("fullName") String fullName,
            @RequestParam("contactNo") String contactNo,
            @RequestParam("skills") String skills,
            @RequestParam("status") String status,
            @RequestParam("experience") String experience,
            @RequestParam("candidateId") String candidateId,
            @RequestParam("jobId") int jobId,
            @RequestParam("companyId") String companyId, 
            @RequestParam("file") MultipartFile file) {
    	 try {
             applicationService.saveApplication(fullName, contactNo, skills,status, experience, candidateId, jobId, companyId, file);
             return ResponseEntity.ok().body("Application saved successfully.");
            		 
         } catch (Exception e) {
             e.printStackTrace();
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save application: " + e.getMessage());
         }
    }
    
    @GetMapping("/getJobApplications")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }
    
    @GetMapping("/applications/company/{companyId}")
    public ResponseEntity<List<Application>> getApplicationsByCompanyId(@PathVariable String companyId) {
        List<Application> applications = applicationService.getApplicationsByCompanyId(companyId);
        if (applications.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(applications);
        }
    }
    
    @GetMapping("/applications/cand/{candidateId}")
    public ResponseEntity<List<Application>> getApplicationsByCandidateId(@PathVariable String candidateId) {
        List<Application> applications = applicationService.getApplicationsByCandidateId(candidateId);
        if (applications.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(applications);
        }
    }
    
//    @PostMapping("/update/{id}/{status}")
//    public ResponseEntity<Void> updateApplicationStatus(@PathVariable String id, @PathVariable String status) {
//        applicationService.updateApplicationStatus(id, status);
//        return ResponseEntity.ok().build(); // Indicate successful update (200 OK)
//    }
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateRecordStatus(@PathVariable String id, @RequestParam String status) {
        try {
            applicationService.updateRecordStatus(id, status);
            return ResponseEntity.ok().body("Record with ID " + id + " updated successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}