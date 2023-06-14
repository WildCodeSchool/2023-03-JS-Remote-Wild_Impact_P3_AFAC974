const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const workControllers = require("./controllers/workControllers");

router.get("/works", workControllers.browse);
router.get("/works/:id", workControllers.read);
router.put("/works/:id", workControllers.edit);
router.post("/works", workControllers.add);
router.delete("/works/:id", workControllers.destroy);

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.post("/categories", categoryControllers.add);

const techniqueControllers = require("./controllers/techniqueControllers");

router.get("/techniques", techniqueControllers.browse);
router.post("/techniques", techniqueControllers.add);

module.exports = router;
