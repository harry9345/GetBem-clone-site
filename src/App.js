import { BrowserRouter, Route } from "react-router-dom";
import Index from "./components/index/Index";
import Faq from "./components/naming/faq/Faq";
import Intro from "./components/naming/intro/Intro";
import Naming from "./components/naming/naming/Naming";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/naming" component={Naming} />
      <Route path="/introduction" component={Intro} />
      <Route path="/faq" component={Faq} />
    </BrowserRouter>
  );
}

export default App;
