import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = (
    <h2 className="flex justify-center items-center text-xl font-medium">
      No Task Available
    </h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className=" flex items-center justify-between mb-1">
          <div className=" flex justify-between w-2/5 ">
            <h5 className="text-xl font-bold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-700 text-white px-2 py-1 rounded-full font-semibold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="bg-zinc-700 w-3/4 ml-40 mt-40 rounded-lg">
      <h1 className=" text-white p-3 text-3xl font-bold text-center">
        My Todo List
      </h1>
      <form
        onSubmit={submitHandler}
        className="p-2 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          className="border-none text-center p-1 text-lg rounded-xl"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="border-none text-center p-1 mt-2 mb-2 text-lg rounded-xl"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-green-700 text-white px-2 py-1 mb-1 text-lg font-semibold rounded-full">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-zinc-600 rounded-lg text-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default App;
