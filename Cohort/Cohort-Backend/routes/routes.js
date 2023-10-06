const express = require("express")
const router = express.Router()
const controller = require('../controller/controller')

router.get('/cohorts', controller.getAllCohorts)

router.get('/cohorts/:id', controller.getSpecifiedCohort)

router.post('/cohorts', controller.createCohort)

router.put('/cohorts/:id', controller.updateCohort)

router.delete('/cohorts/:id', controller.deleteCohort)

module.exports = router