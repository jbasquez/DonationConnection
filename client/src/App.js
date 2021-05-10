import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/donationForm";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import Register from "./pages/register";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Dashboard} />
            <Route exact path={["/donate"]} component={Form} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/pickup"]} component={Pickup}/>
            <Route exact path={["/register"]} component={Register} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
