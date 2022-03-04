import { IoIosCloseCircleOutline } from "react-icons/io";

export function Task({ tasks, deleteTask }) {
  return (
    <div>
      {tasks &&
        tasks.map(({ text, id }) => (
          <li key={id} className="list-none">
            {text[0].toUpperCase()+text.slice(1).toLowerCase()}{" "}
            <IoIosCloseCircleOutline
              onClick={() => deleteTask(id)}
              className="m-0 relative left-14 bottom-5 cursor-pointer w-10 scale-110 fill-red-800 hover:fill-red-200 stroke-red-900"
            />
          </li>
        ))}
    </div>
  );
}
