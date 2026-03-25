import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InvitationApp from "./7_invitationApp/InvitationApp.jsx";

// npm install bootstrap@5 @popperjs/core
createRoot(document.getElementById("root")).render(

    <InvitationApp/>

);
