export function Form({ onChange, task, onSubmit }) {
  const { text } = task;
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
      className="flex justify-center my-8"
    >
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => onChange(e)}
        value={text}
        name="text"
        className="shadow appearance-none border rounded-lg w-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className="rounded-lg bg-zinc-300 p-2 ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-100 duration-300">
        Add
      </button>
    </form>
  );
}
