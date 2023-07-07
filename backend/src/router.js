const express = require("express");
const multer = require("multer");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const authControllers = require("./controllers/authControllers");
const { checkUserData } = require("./services/auth");
const { checkUser, checkAdmin } = require("./services/jwt");

router.post("/signup", checkUserData, authControllers.signup);
router.post("/login", checkUserData, authControllers.login);

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

router.put(
  "/works/:id",
  checkUser,
  checkAdmin,
  upload.single("image"),
  workControllers.edit
);
router.post("/works", checkUser, upload.single("image"), workControllers.add);
router.delete(
  "/works/:id",
  checkUser,
  upload.single("image"),
  workControllers.destroy
);

const biographyControllers = require("./controllers/biographyControllers");

router.get("/biographies", biographyControllers.browse);
router.get("/biographies/:id", biographyControllers.read);
router.put(
  "/biographies/:id",
  checkUser,
  checkAdmin,
  upload.single("image"),
  biographyControllers.edit
);
router.post(
  "/biographies",
  checkUser,
  checkAdmin,
  upload.single("image"),
  biographyControllers.add
);
router.delete("/biographies/:id", checkUser, biographyControllers.destroy);

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

const articleControllers = require("./controllers/articleControllers");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
router.put("/articles/:id", articleControllers.edit);
router.post("/articles", articleControllers.add);
router.delete("/articles/:id", articleControllers.destroy);

const AboutController = require("./controllers/AboutController");

router.get("/about", AboutController.browse);
router.get("/about/:id", AboutController.read);
router.put("/about/:id", AboutController.edit);
router.post("/about", AboutController.add);
router.delete("/about/:id", AboutController.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:email", userControllers.find);
router.post("/users", userControllers.add);
router.delete("/users/:email", userControllers.destroy);

module.exports = router;
