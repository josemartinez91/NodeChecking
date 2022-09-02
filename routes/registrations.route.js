const express = require("express");
const {
  getAllRegistration,
  createRegistration,
  getRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registration.controller");

const registrationRoute = express.Router();

registrationRoute.get("/", getAllRegistration);

registrationRoute.get("/:id", getRegistration);

registrationRoute.post("/", createRegistration);

registrationRoute.patch("/:id", updateRegistration);

registrationRoute.delete("/:id", deleteRegistration);

module.exports = { registrationRoute };
