
import Book from "../models/book.js"



const postBook = async (req, res) => {
    
    const { name, description } = req.body;

    if (!name  || !description) {
        return res.status(400).send({
            success: false,
            message: "please fill all the details"
        })
    };
    try {
        
        const newBook = new Book({
            name: name,
            description:description,

        });

        const savedBook = await newBook.save();
        res.status(201).send({
            success: true,
            data: savedBook,
            message: "Book Add Secessfully"
        })
    } catch (e) {
        res.status(500).send({
            success: false,
            message: e.message,
        })
    }

};



// fetch api
const getBook = async (req, res) => {
    try {
        const bookData = await Book.find();

        res.status(200).send(
            {
                success: true,
                data: bookData,
                message: " all Book data fetch successfully"
            })
    }
    catch (e) {
        res.status(500).send(
            {
                success: false,
                message: e.message
            }
        )
    }
};


export { postBook,getBook };