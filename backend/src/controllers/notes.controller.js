import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {Notes} from  "../models/Notes.model.js";



//---------------------- Create Notes Algo-----------------------------------------
//get the title or content(data) from frontend
//check the data
//create operation
//send response
const createNotes = asyncHandler(async(req, res) => {
    //console.log("receved data:", req.body); // Check if user ID is present
    const {title, content} = req.body;

    if(!title || !content){
        return res
        .status(400)
        .json(
            new ApiResponse(400, null, "Title and content are required to create notes")
        )
     }

     try {
         const note = await Notes.create({
            user : req.user._id,
            title,
            content
        });
        if(!note){
            throw new ApiError("Failed to create note");
        }

        return res
    .status(201)
    .json(
        new ApiResponse(201, "notes created successfully...")
    )

     } catch (error) {
        //  console.error('Error creating note:', error.message); // Log detailed error
         return res .status(500) .json( new ApiResponse(500, null, "Something went wrong while creating notes") );
     }
    
})


const getNotes = asyncHandler(async(req, res) => {
    const note = await Notes.find({user : req.user._id});

    if(!note){
        throw new ApiError(404, "notes does not exist")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, note, "Notes fetched successfully")
    )
});


const updateNotes = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { title, content} = req.body;

    if(!title || !content){
        throw new ApiError(400, "titlr and content can't be null");
    }
    
    const note = await Notes.findOneAndUpdate(
        {_id : id, user : req.user._id},
        {title, content},
        {new : true, runValidators : true}
    );

    if(!note){
        throw new ApiError(404, "does not find notes")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, note, "Note updated successfully....")
    )
})


const deleteNotes = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const note = await Notes.findOneAndDelete(
        {   _id : id,
            user : req.user._id
        }
    )

    if(!note){
        throw new ApiError(404, "note not found?....")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, null, "notes deleted successfully....")
    )
})

export{
    createNotes,
    getNotes,
    updateNotes,
    deleteNotes
}