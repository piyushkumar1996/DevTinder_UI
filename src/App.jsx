import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/store";

import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Body from "./Pages/Body";
import Feeds from "./Pages/Feeds";

function App() {
  return (
    <>
      <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feeds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route />
      </Routes>
      </Provider>
    </>
  );
}

export default App;
