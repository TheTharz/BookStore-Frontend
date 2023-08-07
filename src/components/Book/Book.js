import React from 'react';
import { Button } from '@mui/material';
import './Book.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));
  };
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button sx={{ mt: 'auto' }} LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button sx={{ mt: 'auto' }} onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
