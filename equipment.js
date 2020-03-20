var express = require('express');
var router = express.Router();
const equipment_Controller = require("../controllers/equipment.controller.js");


/* GET all equipments */
router.get('/', equipment_Controller.findAll);

// Create a new Equipment
router.post("/", equipment_Controller.create);

// // Retrieve a single Equipment with id
router.get("/:id", equipment_Controller.findOne);

// // Update a Equipment with id
router.put("/:id", equipment_Controller.update);

// // Delete a Equipment with id
router.delete("/:id", equipment_Controller.delete);


module.exports = router;
