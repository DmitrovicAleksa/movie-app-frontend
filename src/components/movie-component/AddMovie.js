import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { useDispatch, useSelector } from "react-redux";
import { postMovie } from "../../redux/movie/movie.actions";
import { getGenres } from "../../redux/genre/genre.actions";
import Multiselect from "multiselect-react-dropdown";

const AddMovie = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(postMovie(values));
   
  };

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  const genres = useSelector((state) => state.genreReducer.genres);

  const onSelect = (genres) => {
    console.log(genres);
  }
 

  const validate = Yup.object({
    title: Yup.string()
      .max(250, "must be 250 characters or less")
      .required("Title is required"),
    description: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Description is required"),
    image: Yup.mixed().required(),
  });
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        image: "",
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      <div>
        <h1>Add movie</h1>
        <Form>
          <TextField label=" title :" name="title" type="text" />
          <TextField label="description :" name="description" type="text" />
          <TextField
            label="image :"
            name="image"
            type="file"
          />
            <Multiselect name="genres" options={genres} displayValue='name' onSelect={onSelect}></Multiselect>
         
          <button type="submit">add</button>
        </Form>
      </div>
    </Formik>
  );
};

export default AddMovie;
