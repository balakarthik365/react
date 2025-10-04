import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Loader from "./Loader";

const TodoCards = ({ title, id, deleteHandler }) => {
  let [deleteData, setDeleteData] = useState(false);
  const handleDelete = () => {
    setDeleteData(true);
    deleteHandler(id);
  };
  return (
    <>
      <div className="mb-2 border border-neutral-300 rounded-md p-3 text-neutral-800 flex items-center justify-between">
        <h1 className="text-md font-semibold">{title}</h1>
        {!deleteData ? (
          <FaTrashAlt
            onClick={handleDelete}
            className="hover:cursor-pointer hover:text-red-700 hover:text-xl"
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default TodoCards;
