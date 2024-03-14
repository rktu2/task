import Task from '../models/task.js'

// Create a task

export const CreateTask =  async (req, res) => {
  try {
    const { name, description, tag } = req.body;
    const task = new Task({ name, description, tag });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read all tasks with pagination, filtering, and searching

export const getAllTask  = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', filter = {} } = req.query;
    const tasks = await Task.find({ ...filter, name: { $regex: search, $options: 'i' } })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Task.countDocuments({ ...filter, name: { $regex: search, $options: 'i' } });
    res.json({
      tasks,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Read a single task

export const getTaskById =  async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a task

export const UpdateTask =  async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a task

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}







