function NoResults({ title, message, word }) {
  let notificationTitle;
  let style = "w-2/3 p-6 border rounded-md m-auto mt-10";

  if (title === "Error") {
    notificationTitle = "Error";
    style += " bg-red-200";
  } else {
    notificationTitle = title + " for the word " + word;
  }

  return (
    <div className={style}>
      <h1 className="text-lg">{notificationTitle}</h1>
      <hr className="my-2" />
      <p className="text-md">{message}</p>
    </div>
  );
}

export default NoResults;
