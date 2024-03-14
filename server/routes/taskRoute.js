import express from 'express';
import userAuth from '../middlewares/authHandle.js';
import { CreateTask,deleteTask,getAllTask,getTaskById,UpdateTask} from '../controllers/taskcontroller.js'
const router= express.Router();

//routes

router.post('/create-task', CreateTask);
router.get('/get-all-task', getAllTask);

router.patch('/update-task/:id', UpdateTask);
router.get('/get-taskById/:id',getTaskById)

router.delete('/delete-task/:id',deleteTask);




export default router;