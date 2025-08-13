import {Schema,model} from "mongoose"



const bookSchema= new Schema({

    name:{type:String,required:true},
    description:{type:String,required:true},
},
{

    timestamps:true,
}

)
const Book = model("book",bookSchema);
export default Book;