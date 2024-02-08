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
    copytask.splice(i,1);
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
        <li key={i} className="flex items-center justify-between m-5">
          <div className=" flex items-center justify-between w-2/3">
            <h5 className="text-3xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-full font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-zinc-800 text-white p-5 text-5xl font-semibold text-center">
        My Todo List
      </h1>
      <form
        onSubmit={submitHandler}
        className=" flex items-center justify-center"
      >
        <input
          type="text"
          className="border-zinc-900 border-4 m-8 px-4 py-2 text-2xl font-medium rounded-lg "
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="border-zinc-900 border-4 m-8 px-4 py-2 text-2xl font-medium rounded-lg"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-zinc-900 text-white px-4 py-3 m-5 text-2xl font-semibold rounded-full">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
