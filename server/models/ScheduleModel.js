import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    doctor_id:{
        type: String,
    },
    days:{
        type: String,
    },
    hour:{
        type: Number,
        min: 0,
        max: 23,
    },
    minute:{
        type: Number,
        min: 0,
        max: 59,
    },
    unavailable: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.model("Schedule", ScheduleSchema);
