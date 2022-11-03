import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import New from "./pages/new/New";
import Form from "./pages/form/Form";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import { userInputs } from "./formSource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const RequireAuth = ({ children}) => {
  //   const { user } = useUserAuth();
  //   console.log("Check user in Private: ", user);
  //   if (!user) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New title="Add New Report" />
                </ProtectedRoute>
              }
            />
             <Route
              path="form"
              element={
                <ProtectedRoute>
                  <Form inputs={userInputs} />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
