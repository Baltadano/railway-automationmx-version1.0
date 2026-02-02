// src/components/CourseCard.js
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => (
  <div>
    <img src={course.thumbnail} alt={course.title} />
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/curso/${course.id}`}>Ver detalles</Link>
  </div>
);

export default CourseCard;

