// eslint-disable-next-line no-unused-vars, react/prop-types
export function Card({title, onClick}) {
  function handleClick() {
    if (onClick) onClick()
  }
  return (
    <div
    className="p-4 w-auto h-32 flex justify-center items-center text-center border-2 border-amber-400 cursor-pointer font-bold hover:bg-amber-400 hover:text-white rounded-lg shadow-lg duration-700 text-amber-400"
    onClick={
      handleClick
    }
    >
      <h1 className="card-title">{title}</h1>
    </div>
  );
}