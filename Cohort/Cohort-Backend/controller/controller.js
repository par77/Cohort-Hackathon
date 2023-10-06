const cohort = require('../model/cohort')

exports.getSpecifiedCohort = async (req, res) => {
    try{
        const specifiedCohort = await cohort.findById(req.params.id)
        res.json(specifiedCohort)
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.getAllCohorts = async (req, res) => {
    try{
        const allCohorts = await cohort.find()
        res.json(allCohorts)
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.createCohort = async (req, res) => {
    try{
        const newCohort = await cohort.create(req.body)
        res.json(newCohort) 
    }catch(err){
        res.status(400).send(err.message)
    }
}


exports.updateCohort = async (req, res) => {
    try{
        const updatedCohort = await cohort.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedCohort)
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.deleteCohort = async (req, res) => {
    try{
        await cohort.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }catch(err){
        res.status(500).send(err.message)
    }
}