import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

const BookDetail = () => {
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(inputs.available),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/books'));
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent={'center'}
            maxWidth={700}
            alignContent={'center'}
            alignSelf={'center'}
            marginLeft={'auto'}
            marginRight={'auto'}
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              margin='normal'
              fullWidth
              variant='outlined'
              name='name'
              value={inputs.name}
              onChange={handleChange}
            />
            <FormLabel>Author</FormLabel>
            <TextField
              margin='normal'
              fullWidth
              variant='outlined'
              name='author'
              value={inputs.author}
              onChange={handleChange}
            />
            <FormLabel>Description</FormLabel>
            <TextField
              margin='normal'
              fullWidth
              variant='outlined'
              name='description'
              value={inputs.description}
              onChange={handleChange}
            />
            <FormLabel>Price</FormLabel>
            <TextField
              type='number'
              margin='normal'
              fullWidth
              variant='outlined'
              name='price'
              value={inputs.price}
              onChange={handleChange}
            />
            <FormLabel>Image</FormLabel>
            <TextField
              margin='normal'
              fullWidth
              variant='outlined'
              name='image'
              value={inputs.image}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.available}
                  onChange={() => setChecked(!checked)}
                />
              }
              label='Available'
            />

            <Button type='submit' variant='contained'>
              {' '}
              Update book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
