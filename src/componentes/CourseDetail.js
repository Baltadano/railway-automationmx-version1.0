// src/pages/CourseDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses"; // Supón que hay un array de cursos aquí

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);
  if (!course) return <p>Curso no encontrados</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <img src={course.thumbnail} alt={course.title} />
      <p>{course.description}</p>
      {/* Aquí podrías agregar videos, lecciones, archivos PDF, etc. */}
    </div>
  );
};

export default CourseDetail;
