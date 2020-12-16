import { Header } from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAd from "./pages/CreateAd.js";
import Home from "./pages/Home";
import AdPage from "./pages/Ad";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto px-32">
          <Switch>
            <>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/add">
                <CreateAd />
              </Route>
              <Route path="/ads/:id">
                <AdPage />
              </Route>
            </>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
