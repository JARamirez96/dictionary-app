import { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearchInput = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      navigate(`search/${inputRef.current.value}`);
    }
  };

  return (
    <>
      <h1 className="text-center my-6 text-4xl">Dictionary App</h1>
      <form>
        <div className="w-6/12 m-auto flex">
          <input
            id="search"
            type="text"
            placeholder="Enter word"
            ref={inputRef}
            className="w-full rounded-s-lg bg-gray-50 border border-gray-300 p-2.5"
            required
          />
          <button
            onClick={handleSearchInput}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium py-2 px-5 rounded-e-lg text-lg"
          >
            Search
          </button>
        </div>
      </form>
      <Outlet />
    </>
  );
}

export default App;
