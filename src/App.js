import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Router>
  );
};
export default App;
