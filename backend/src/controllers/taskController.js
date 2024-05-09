const Task = require("../models/Task");

const all = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json({ tasks });
  } catch (error) {
    console.error("Erro na função 'all':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const add = async (req, res) => {
  try {
    if (
      req.body.taskName &&
      req.body.createdAt &&
      req.body.priority &&
      req.body.status &&
      req.body.dueDate
    ) {
      const newTask = await Task.create({
        taskName: req.body.taskName,
        createdAt: req.body.createdAt,
        priority: req.body.priority,
        status: req.body.status,
        dueDate: req.body.dueDate,
        finishDate:
          req.body.finishDate !== null ? req.body.finishDate : undefined,
      });
      res.status(201).json({ item: newTask });
    } else {
      res.status(400).json({ error: "Dados não enviados corretamente!" });
    }
  } catch (error) {
    console.error("Erro na função 'add':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(400).json({ error: "Tarefa não encontrada" });
    }

    if (req.body.taskName) {
      task.taskName = req.body.taskName;
    }

    if (req.body.priority) {
      task.priority = req.body.priority;
    }

    if (req.body.status) {
      task.status = req.body.status;
    }

    if (req.body.dueDate) {
      task.dueDate = req.body.dueDate;
    }

    if (
      req.body.finishDate !== undefined &&
      req.body.finishDate !== null &&
      req.body.finishDate !== ""
    ) {
      task.finishDate = req.body.finishDate;
    } else {
      task.finishDate = null;
    }

    await task.save();
    res.json({ item: task });
  } catch (error) {
    console.error("Erro na função 'update':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.json({});
    } else {
      return res.status(400).json({ error: "Tarefa não encontrada" });
    }
  } catch (error) {
    console.error("Erro na função 'remove':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = { all, add, update, remove };
