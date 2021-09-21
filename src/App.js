import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};
export default App;
