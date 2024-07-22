import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function WordDefinition({ definition, partsOfSpeech }) {
  const { word, phonetic, meanings } = definition;
  const [activePartOfSpeech, setActivePartOfSpeech] = useState(
    partsOfSpeech[0]
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (meanings.length > 0) {
      setActivePartOfSpeech(meanings[0].partOfSpeech);
    }
  }, [meanings]);

  let classes = " first:ml-0 mx-4 text-lg cursor-pointer";

  const searchWordHandler = (word) => {
    navigate(`/search/${word}`);
  };

  return (
    <div className="px-6 py-4 mb-10 border rounded-md border-gray-200 shadow text-center mx-auto mt-10 w-2/3">
      <div className="flex items-end mb-3">
        <h5 className="text-left text-2xl">{word}</h5>
        <h6 className="font-mono ml-5">{phonetic}</h6>
      </div>
      <hr className="bg-gray-200 mb-3" />
      <div className="text-start">
        {partsOfSpeech.map((speech) => (
          <span
            key={speech}
            className={
              speech === activePartOfSpeech
                ? "text-cyan-800 " + classes
                : "text-cyan-500 hover:text-cyan-800" + classes
            }
            onClick={() => setActivePartOfSpeech(speech)}
          >
            {speech}
          </span>
        ))}
        {meanings.map((data) => (
          <div key={data.partOfSpeech}>
            {data.partOfSpeech === activePartOfSpeech && (
              <React.Fragment key={data.partOfSpeech}>
                <h5 className="my-3">Definitions</h5>
                <ul className="px-6">
                  {data.definitions.map((def) => (
                    <li
                      key={def.definition}
                      className="list-decimal font-thin my-2"
                    >
                      {def.definition}
                    </li>
                  ))}
                </ul>
                {data.antonyms.length > 0 && (
                  <>
                    <h5 className="my-3">Antonyms</h5>
                    {data.antonyms.map((antonym) => (
                      <span
                        className="inline mr-4 ml-0 cursor-pointer text-cyan-500 hover:border-b-2 hover:border-cyan-950"
                        key={antonym}
                        onClick={(event) =>
                          searchWordHandler(event.target.textContent)
                        }
                      >
                        {antonym}
                      </span>
                    ))}
                  </>
                )}
                {data.synonyms.length > 0 && (
                  <>
                    <h5 className="my-3">Synonyms</h5>
                    {data.synonyms.map((synonym) => (
                      <span
                        className="inline mr-4 ml-0 cursor-pointer text-cyan-500 hover:border-b-2 hover:border-cyan-950"
                        key={synonym}
                        onClick={(event) =>
                          searchWordHandler(event.target.textContent)
                        }
                      >
                        {synonym}
                      </span>
                    ))}
                  </>
                )}
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordDefinition;
