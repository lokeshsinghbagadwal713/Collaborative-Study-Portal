import mongoose,{Schema} from 'mongoose';
import { UserModel } from './User.model.js';


const notesSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : UserModel,
        require : true
    },
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },

},
{timestamps : true})

export const Notes = mongoose.model("Notes", notesSchema);