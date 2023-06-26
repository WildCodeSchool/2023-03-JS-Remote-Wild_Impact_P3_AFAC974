const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const authControllers = require("./controllers/authControllers");
const { checkUserData } = require("./services/auth");
const { checkUser } = require("./services/jwt");

router.post("/signup", checkUserData, authControllers.signup);
router.post("/login", checkUserData, authControllers.login);

const workControllers = require("./controllers/workControllers");

router.get("/works", workControllers.browse);
router.get("/works/:id", workControllers.read);
router.put("/works/:id", checkUser, workControllers.edit);
router.post("/works", checkUser, workControllers.add);
router.delete("/works/:id", checkUser, workControllers.destroy);

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.post("/categories", checkUser, categoryControllers.add);
router.put("/categories/:id", checkUser, categoryControllers.edit);
router.delete("/categories/:id", checkUser, categoryControllers.destroy);

const techniqueControllers = require("./controllers/techniqueControllers");

router.get("/techniques", techniqueControllers.browse);
router.get("/techniques/:id", techniqueControllers.read);
router.put("/techniques/:id", checkUser, techniqueControllers.edit);
router.post("/techniques", checkUser, techniqueControllers.add);
router.delete("/techniques/:id", checkUser, techniqueControllers.destroy);

module.exports = router;
