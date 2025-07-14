const express = require('express');
const CertificationController = require('../controllers/certificationController');

const router = express.Router();
const certificationController = new CertificationController();

router.post('/certifications', certificationController.createCertification);
router.get('/certifications', certificationController.getCertifications);
router.put('/certifications/:id', certificationController.updateCertification);
router.delete('/certifications/:id', certificationController.deleteCertification);

module.exports = router;