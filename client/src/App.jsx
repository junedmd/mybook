import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  useEffect(() => {
    const fetchData = async () => {

      try {

        const result = await axios.get("api/books");
        setData(result.data.data);
        console.log(result.data)


      } catch (e) {

      }
    }
    fetchData();

  }, [])

  const submitData = async () => {

    try {
      const res = await axios.post("/api/books", { name, description });
      setData((prevData) => [...prevData, res.data.data]);
      setName("");
      SetDescription("");
    } catch (e) {
      console.error(e);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      setData((prevData) => prevData.filter((book) => book._id !== id));

    } catch (e) {
      console.error("Delete failed:", e);
    }
  };


  return (
    <>
      <div className='main-container'>
        <div className='left-part'>
          <div className='form'>

            <input type="text" placeholder='book name' value={name} onChange={(e) => {
              setName(e.target.value)
            }} />
            <input type='text' placeholder='Description' value={description} onChange={(e) => {
              SetDescription(e.target.value);
            }} />
            <button className='btn' onClick={submitData}>Sumbit</button>
          </div>
        </div>

        <div className='card' >
          <div className='right-part'>
            {
              data.length > 0 ? (
                data.map((book) => (
                  <div className='book'>
                    <h3>{book.name}</h3>
                    <p>{book.description}</p>

                    <MdDeleteOutline className='icons' onClick={() => deleteBook(book._id)} />

                  </div>
                ))
              ) : (
                <p>No Book is available</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
