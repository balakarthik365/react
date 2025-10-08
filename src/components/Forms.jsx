import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  //   useRef()
  //   let inputName = useRef();
  //   let inputEmail = useRef();
  // controlled component
  //   let [value, setValue] = useState({ inputName: "", inputEmail: "" });
  //   react hook form
  let { register, handleSubmit, reset } = useForm(); // gives 3 values -> name, onBlur, onChange and ref
  const submitHandler = (data) => {
    //     event.preventDefault();
    //   useRef()
    // console.log(inputName.current.value);
    // console.log(inputEmail.current.value);
    // inputName.current.value = "";
    // inputEmail.current.value = "";
    // controlled component
    // console.log(value);
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="container">
        <div className="w-1/4 mx-auto mt-2 p-5">
          <form action="" onSubmit={handleSubmit(submitHandler)}>
            {/* useRef() */}
            {/* <h1 className="text-xl mb-2">
              The useRef hook in React is a built-in function that allows you to
              create a mutable reference that pe rsists across re-renders but
              does not cause a re-render when changed.
              <p className=" font-bold">It is often used for:</p>
              <ol>
                <li>
                  Accessing and interacting with DOM elements directly (like
                  focusing an input)
                </li>
                <li>
                  Storing mutable values (values you want to persist across
                  renders without re-rendering the component if they change)
                </li>
                <li>
                  Referencing previous values, timers, or any mutation-optimized
                  logic
                </li>
              </ol>
            </h1> */}
            {/* <input
              type="text"
              name=""
              id=""
              ref={inputName}
              className="my-2 w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter name"
            />
            <input
              type="email"
              name=""
              id=""
              ref={inputEmail}
              className="w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter email"
            />
            <input
              type="submit"
              value="Submit"
              className=" bg-black text-white w-full mt-2 hover:cursor-pointer p-2 rounded-lg"
            /> */}
            {/* controlled component */}
            {/* <input
              type="text"
              name=""
              id=""
              className="my-2 w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter name"
              onChange={(event) =>
                setValue({ ...value, inputName: event.target.value })
              }
            />
            <input
              type="email"
              name=""
              id=""
              className="w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter email"
              onChange={(event) =>
                setValue({ ...value, inputEmail: event.target.value })
              }
            />
            <input
              type="submit"
              value="Submit"
              className=" bg-black text-white w-full mt-2 hover:cursor-pointer p-2 rounded-lg"
            /> */}
            {/* react hook form */}
            <input
              type="text"
              name=""
              id=""
              className="my-2 w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter name"
              {...register("inputName")}
            />
            <input
              type="email"
              name=""
              id=""
              className="w-full focus:outline-none border border-neutral-600 p-2 rounded-lg focus:border-violet-500"
              placeholder="Enter email"
              {...register("inputEmail")}
            />
            <input
              type="submit"
              value="Submit"
              className=" bg-black text-white w-full mt-2 hover:cursor-pointer p-2 rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;
