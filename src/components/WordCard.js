import { useParams } from "react-router-dom";
import useDefinition from "../hooks/useDefinition";
import Spinner from "./UI/Spinner";
import React, { useEffect, useState } from "react";
import NoResults from "./UI/NoResults";

function WordCard() {
  const { word } = useParams();
  const { info, isLoading, error } = useDefinition(word);
  //   const [activeMeaning, setActiveMeaning] = useState(null);
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    if (info) {
      const partOfSpeech = info.meanings.map((meaning) => meaning.partOfSpeech);
      setMeanings(partOfSpeech);
    } else {
      setMeanings([]);
    }
  }, [info]);

  let content;

  if (isLoading) {
    content = <Spinner label="Searching..." />;
  }

  if (error) {
    const { title, message } = error.response.data;
    content = <NoResults title={title} message={message} word={word} />;
  }

  if (info) {
    content = (
      <div className="p-6 border rounded-md border-gray-200 shadow text-center mx-auto mt-10 w-2/3">
        <div className="flex items-end mb-3">
          <h5 className="text-left text-2xl">{info.word}</h5>
          <h6 className="font-mono ml-5">{info.phonetic}</h6>
        </div>
        <hr className="bg-gray-200 mb-3" />
        <div className="text-start">
          {meanings.map((meaning) => (
            <span
              key={meaning}
              className="mx-4 text-lg text-cyan-500 hover:text-cyan-800 cursor-pointer"
            >
              {meaning}
            </span>
          ))}
          <div>
            <h5 className="mt-3 font-serif">Definitions</h5>
            <ul>
              {/* {info.meanings.map((description) => (
                <li>{description.definitions.definition}</li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default WordCard;
