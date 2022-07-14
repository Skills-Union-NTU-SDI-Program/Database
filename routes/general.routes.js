


import express from 'express';
import EnrollmentController from '../controllers/enrollment.controller.js';


const router = express.Router();
const enrollmentController = new EnrollmentController();


router.get("/general/enrollment/:enrollmentId",enrollmentController.retrieveEnrollment);
router.get("/general/enrollments",enrollmentController.retrieveEnrollments);

router.get("/general/class",enrollmentController.studentInSubject);
router.get("/general/tutor",enrollmentController.studentToTutor);

router.get("/general/viewEnrollment",enrollmentController.getViewEnrollment);



export default router;




