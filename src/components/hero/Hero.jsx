import style from "./Hero.module.css";
import Card from "../card/card.jsx";
import Form from "../form/Form.jsx";
export default function Main() {
  return (
    <>
      <div className={`d-flex  justify-content-center`}>
        <div className="container-full">
          <div className="row">
            <div className="col">
              <Form />
            </div>
          </div>
          <div className="row justify-content-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
