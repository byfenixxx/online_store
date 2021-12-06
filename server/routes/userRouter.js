const Router = require("express");
const userContoller = require("../controllers/userContoller");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userContoller.registration);
router.post("/login", userContoller.login);
router.get("/auth", authMiddleware, userContoller.check);

module.exports = router;
