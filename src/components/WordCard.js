import { useParams } from "react-router-dom";
import useDefinition from "../hooks/useDefinition";
import Spinner from "./UI/Spinner";
import React, { useEffect, useState } from "react";
import NoResults from "./UI/NoResults";
import WordDefinition from "./WordDefinition";

function WordCard() {
  const { word } = useParams();
  const { info, isLoading, error } = useDefinition(word);
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    if (info) {
      const partsOfSpeech = info.meanings.map(
        (meaning) => meaning.partOfSpeech
      );
      setMeanings(partsOfSpeech);
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
    content = <WordDefinition definition={info} partsOfSpeech={meanings} />;
  }

  return <>{content}</>;
}

export default WordCard;
