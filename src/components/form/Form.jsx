import { useState } from "react";
import Card from "../card/card.jsx";

function Form() {
  const [newTitle, setTitle] = useState("");
  function handleSubmit() {
    event.preventDefault();
  }
  return (
    <>
      <h2 className="text-center mb-3">Aggiungi un titolo:</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex mb-3 justify-content-center gap-3"
        action="title"
      >
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn btn-dark" type="submit">
          Add
        </button>
        <p>il titolo è:{newTitle}</p>
        {console.log({ newTitle })}
      </form>
    </>
  );
}

export default Form;
