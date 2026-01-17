import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];

    copyTask.push({ title, details });
    setTask(copyTask);

    console.log(task);
    setTitle("");
    setDetails("");
  };

  const deleteHandler = (index) => {
  const copyTask = [...task];
  copyTask.splice(index, 1);
  setTask(copyTask);
};


  return (
    <div className=" m-5 text-white">
      <h1 className="text-yellow-300 text-2xl font-extrabold text-center">
        Notes Project
      </h1>

      <div className="lg:flex flex-nowrap gap-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex gap-4 flex-col items-start lg:w-1/2"
        >

          <h2 className=" text-xl mt-10 font-bold">New Notes</h2>

          <input
            className=" text-lg text-white border-2 p-2.5 mt-5 h-15 w-full"
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>

          <textarea
            className=" text-lg text-white border-2 p-2.5 mt-5 h-30 w-full "
            type="text"
            placeholder="Write your notes here..."
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>

          <button className="bg-amber-50 w-full pt-2.5 pb-2.5 text-lg font-semibold active:scale-95 text-black">
            ADD NOTE
          </button>
        </form>

        <div className="mt-10">
          <h2 className=" text-xl font-bold">Recent Notes</h2>

          <div className=" flex gap-4 flex-wrap">
            {task.map(function (note, idx) {
              return (
                <div
                  key={idx}
                  className="bg-amber-50 h-40 w-40 mt-5 p-2.5rounded text-black relative"
                >
                  <div>
                    <h3 className=" text-lg font-bold ml-2.5 mt-2.5">
                      {note.title}
                    </h3>
                    <hr className=" w-full border" />
                    <p className=" text-lg font-semibold ml-2.5 mt-2.5">
                      {note.details}
                    </p>

                    <button
                      onClick={() => deleteHandler(idx)}
                      className="bg-red-500 text-white text-sm px-2 py-1 rounded-xl hover:bg-red-600 active:scale-95 absolute top-1 right-1"
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;