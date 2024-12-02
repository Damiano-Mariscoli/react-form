function Form() {
  return (
    <>
      <h2 className="text-center mb-3">Aggiungi un titolo:</h2>
      <form className="d-flex mb-3 justify-content-center gap-3" action="title">
        <input type="text" />
        <button className="btn btn-dark" type="submit">
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
