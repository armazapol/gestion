import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import AddAccount from "./pages/AddAccount";
import ModifiedAccount from "./pages/ModifiedAccount";
import SearchAccount from "./pages/SearchAccount";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Account />} />
          <Route exact path="/addAccount" element={<AddAccount />} />
          <Route exact path="/modifiedAccount" element={<ModifiedAccount />} />
          <Route exact path="/searchAccount" element={<SearchAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
