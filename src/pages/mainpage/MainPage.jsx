import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div id="mainpage">
        <h1>MainPage</h1>
        <Link to="./recipe/paihuanggua">Pai huanggua</Link>
        <br />
        <br />
        <Link to="./recipe/hongshaojitui">Hongshao jitui</Link>
        <br />
        <br />
        <Link to="./recipe/ganbiansijidou">Ganbian sijidou</Link>
        <br />
        <br />
      </div>
    </>
  );
}
