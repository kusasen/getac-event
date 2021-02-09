import Header from "./tpl/Header";
import Footer from "./tpl/Footer";
import HomePage from "./component/index/HomePage";
import TradShow from "./component/TradShow";
import "./assets/css/getac.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/tradshow/" component={TradShow}></Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
