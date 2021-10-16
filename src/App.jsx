import { Card, Form } from "./components";
import "./index.scss";
const App = () => {
  return (
    <>
      <header className="header">
        <Form />
      </header>

      <main className="main">
        <Card />
      </main>
    </>
  );
};

export default App;
