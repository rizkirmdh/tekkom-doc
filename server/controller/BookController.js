import Book from "../models/BookModel.js"
import Schedule from "../models/ScheduleModel.js"

// CREATE
export const createBook = async (req, res, next)=>{
    const scheduleId = req.params.id
    const newBook = new Book(req.body)
    
    try{
        const savedBook = await newBook.save();
        try{
            await Schedule.findByIdAndUpdate(scheduleId, { unavailable: true }, { new: true })
        } catch(err){
            next(err)
        }
        res.status(200).json(savedBook);
    } catch(err){
        next(err);
    }
}

// UPDATE
export const updateBook = async (req, res, next)=>{
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedBook);
    } catch(err){
        next(err)
    }
}

// DELETE
export const deleteBook = async (req, res, next)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book has been deleted.");
    } catch(err){
        next(err);
    }
}

// GET
export const getBook = async (req, res, next)=>{
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch(err){
        next(err);
    }
}

// GET ALL
export const getAllBook = async (req, res, next)=>{
    try{
        const books = await Book.find();
        res.status(200).json(books);
    } catch(err){
        next(err);
    }
}