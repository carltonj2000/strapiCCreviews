import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/details/:id" component={ReviewDetails} />
          <Route path="/category/:id" component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
