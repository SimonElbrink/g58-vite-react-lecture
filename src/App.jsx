import Header from "./1_fundamentals/Header";
import Content from "./1_fundamentals/Content";
import Navbar from "./1_fundamentals/Navbar";
import DynamicNavbar from "./1_fundamentals/DynamicNavbar";
import AlertMessage from "./2_props/AlertMessage";

import { FaExclamationTriangle } from "react-icons/fa";

function App() {
  return (
    <>
      <AlertMessage />

      <AlertMessage message="Opertion Successful!" alertType="alert-success" />
      <AlertMessage
        message="Something wrong happend!"
        alertType="alert-warning"
        icon={<FaExclamationTriangle />}
      />
      <AlertMessage
        message="Opertion Failed"
        alertType="alert-danger"
        icon={<FaExclamationTriangle />}
      />
    </>
  );
}

export default App;
