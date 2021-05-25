import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import UserComponent from "./components/allUsers/UserComponent";
import Autorisation from "./components/Auth/autorisation";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home">
                        <UserComponent/>
                    </Route>
                    <Route path="/">
                        <Autorisation/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
