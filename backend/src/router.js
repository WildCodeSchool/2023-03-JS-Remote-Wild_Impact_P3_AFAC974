const express = require("express");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets/images");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const extension = fileArray.pop();
    const fileName = fileArray.join("-").split(" ").join("-");
    cb(null, `${fileName}_${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: "2MB" },
});

router.put("/works/:id", upload.single("image"), workControllers.edit);
router.post("/works", upload.single("image"), workControllers.add);
router.delete("/works/:id", workControllers.destroy);

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);
router.post("/categories", categoryControllers.add);
router.put("/categories/:id", categoryControllers.edit);
router.delete("/categories/:id", categoryControllers.destroy);

const techniqueControllers = require("./controllers/techniqueControllers");

router.get("/techniques", techniqueControllers.browse);
router.get("/techniques/:id", techniqueControllers.read);
router.put("/techniques/:id", techniqueControllers.edit);
router.post("/techniques", techniqueControllers.add);
router.delete("/techniques/:id", techniqueControllers.destroy);

module.exports = router;
