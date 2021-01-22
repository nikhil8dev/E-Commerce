import "./default.scss";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import { Route, Switch } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLaout";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
