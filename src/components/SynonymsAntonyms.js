import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SynonymsAntonyms({ label, data }) {
  const [uniqueValues, setUniqueValues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueSet = new Set(data);
    setUniqueValues([...uniqueSet]);
  }, [data]);

  return (
    <>
      <h5 className="my-3">{label}</h5>
      {uniqueValues.map((word) => (
        <span
          className="inline mr-4 ml-0 cursor-pointer text-cyan-500 hover:border-b-2 hover:border-cyan-950"
          key={word}
          onClick={(event) => navigate(`/search/${event.target.textContent}`)}
        >
          {word}
        </span>
      ))}
    </>
  );
}

export default SynonymsAntonyms;
