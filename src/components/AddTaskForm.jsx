import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form className="w-[800px]" onSubmit={handleSubmit}>
      <div
        className={` w-[700px] flex space-x-2 items-center rounded-lg px-4`}
      >
        <CiCirclePlus size={28} className="size-1/12 text-gray-500 " />
        <input
          className=" w-full h-fit p-1 py-4 text-lg"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="w-[400px] px-4 uppercase text-gray-500 " type="submit">
          Add task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
