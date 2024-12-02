import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  return (
    <>
      <h2 className="text-center mb-3">Aggiungi un titolo:</h2>
      <form className="d-flex mb-3 justify-content-center gap-3" action="title">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn btn-dark" type="submit">
          Add
        </button>
        {console.log({ title })}
        <p>il titolo è:{title}</p>
      </form>
    </>
  );
}

export default Form;
