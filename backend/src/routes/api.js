const { Router } = require("express");
const TaskController = require("../controllers/taskController");

const router = Router();

router.get("/tasks", TaskController.all);
router.post("/tasks", TaskController.add);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.remove);

module.exports = router;
