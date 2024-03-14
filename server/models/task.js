import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
   name:{
        type: String,
        require:[true, 'name is required']
    },
    description:{
        type: String,
        required: [true, 'description is required'],
        minlength: 10
    },
    tag:{
        type: String,
        required: [true, 'tag is required'],
    }
   
},{timestamps: true});

export default mongoose.model('task', TaskSchema);
