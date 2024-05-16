import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/Store";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./Components/ProtectedRoute/Route";
// import UseAuthLisener from "./Components/Auth/UseAuthLisener";
import UseAuthLisener from "./Components/Auth/UseAuthLisener";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT_ID;
function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain={domain}
        clientId={client}
        authorizationParams={{
          redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URL,
        }}
      >
        <Provider store={store}>
          <AppContent />
        </Provider>
      </Auth0Provider>
    </div>
  );
}

function AppContent() {
  const auth = UseAuthLisener();
  const routeArray = [
    {
      path: "*",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute auth={auth}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ];
  const routeElement = useRoutes(routeArray);
  return (
    <div>
      <NavBar />
      <div>{routeElement}</div>
    </div>
  );
}

export default App;
