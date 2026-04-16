"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const TodoAndPhotoList = () => {
  const [todos, setTodos] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);
  return (
    <div>
      <h1 className="text-2xl  text-slate-950">Todo List</h1>
      <ul>
        {todos.slice(0, 5).map((todo: any) => (
          <li key={todo?.id} className="mb-2 text-slate-950">
            {todo.title} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>

      <h1 className="text-2xl mt-2  text-slate-950">Photos</h1>
      <ul>
        {photos.slice(0, 5).map((photo: any) => (
          <li key={photo?.id} className="mb-2">
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-16 h-16"
              height={100}
              width={100}
            />
            <p className=" text-slate-950">{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAndPhotoList;
