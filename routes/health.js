let express = require("express");
let router = express.Router();

let healthController = require("../controllers/health");

router.get("/", healthController.displayinfo);
router.get("/add", healthController.displayadd);
router.post("/add", healthController.processinfo);
router.get("/test", healthController.displayPatients);

module.exports = router;
