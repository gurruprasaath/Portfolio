class CertificationController {
    constructor(CertificationModel) {
        this.CertificationModel = CertificationModel;
    }

    async createCertification(req, res) {
        try {
            const certification = new this.CertificationModel(req.body);
            await certification.save();
            res.status(201).json(certification);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getCertifications(req, res) {
        try {
            const certifications = await this.CertificationModel.find();
            res.status(200).json(certifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateCertification(req, res) {
        try {
            const { id } = req.params;
            const certification = await this.CertificationModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!certification) {
                return res.status(404).json({ message: 'Certification not found' });
            }
            res.status(200).json(certification);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCertification(req, res) {
        try {
            const { id } = req.params;
            const certification = await this.CertificationModel.findByIdAndDelete(id);
            if (!certification) {
                return res.status(404).json({ message: 'Certification not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default CertificationController;