var student_model = require("../model/student_model");
var express = require("express");
var router = express.Router();
 
/** student page link **/
router.get("/student",function(req,res){
   
	if(req.session.user === undefined) {
		res.redirect('/'); 
	} 
	
    res.render("student",{
        pageTitle:'Student Admin Page',
        pageID:'Student Admin Page'
    })
});

router.post("/getResearchTitle",function(req,res){  
	student_model.getResearchTitle(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getRegisterUserDetail",function(req,res){  
	student_model.getRegisterUserDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getProfile",function(req,res){  
	student_model.getProfile(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});
 
router.post("/getEducation",function(req,res){  
	student_model.getEducationDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getPublication",function(req,res){  
	student_model.getPublicationDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getWorkExperience",function(req,res){  
	student_model.getWorkExperienceDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getProgramResearchInterest",function(req,res){  
	student_model.getProgramResearchInterest(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/student",function(req,res){ 
	student_model.setProfile(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/education",function(req,res){ 
	student_model.setEducationDetail(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/publication",function(req,res){ 
	student_model.setPublicationDetail(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/workExperience",function(req,res){ 
	student_model.setWorkExperienceDetail(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/deleteProgramResearchInterest",function(req,res){ 
	student_model.deleteProgramResearchInterest(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/researchInterest",function(req,res){ 
	student_model.setProgramResearchInterest(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});


/* Student enrollment and view program section */

router.post("/GetStudentOfferAdmissionDetail",function(req,res){  
	student_model.GetStudentOfferAdmissionDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/setAcceptAdmissions",function(req,res){ 
	student_model.setAcceptAdmissions(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/setRejectAdmissionsOffer",function(req,res){ 
	student_model.setRejectAdmissionsOffer(req.body, function(err, data) {	    
	    if (err)
	    {
	    	throw err
	    }
	    else
	    {
	    	res.json(data);	
	    } 
	  });
});

router.post("/GetStudentProgramDetail",function(req,res){  
	student_model.GetStudentProgramDetail(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getEnrollmentStatus",function(req,res){  
	student_model.getEnrollmentStatus(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/deleteRegisterCourses",function(req,res){  
	student_model.deleteRegisterCourses(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/setRegisterCourses",function(req,res){  
	student_model.setRegisterCourses(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getRegisterCourses",function(req,res){  
	student_model.getRegisterCourses(req.body,function(err, data) {
		if (err)
	    {
	    	throw err;
	    }
	    else
	    {  
	       res.json(data);	
	    }	      
	}); 
});

router.post("/getAssessment",function(req,res){ ;
student_model.getAssessment(req.body, function(err, data) {	    
    if (err)
    {
    	throw err
    }
    else
    {
    	res.json(data);	
    } 
  });
});

/** communication route **/

router.post("/getDistinctEmailList",function(req,res){  
	student_model.getDistinctEmailList(req.body,function(err, data) {
		if (err){
	    	throw err;
	    }
	    else{  
	    	console.log(data);
	    	res.json(data);	
	    }	      
	}); 
});

router.post("/getAllMessages",function(req,res){  
	student_model.getAllMessages(req.body,function(err, data) {
		if (err){
	    	throw err;
	    }
	    else{  
	    	console.log(data);
	    	res.json(data);	
	    }	      
	}); 
});


router.post("/sendMessage",function(req,res){
	student_model.sendMessage(req.body, function(err, data) {	    
	    if (err){
	    	throw err;
	    	
	    }else{
	    	res.json(data);	
	    } 
	  });
});

 
module.exports =router; 