import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import Background from "./components/background";
import PracDash from "./components/Prac-dashboard";
import PractitionerList from "./components/practitioner-list";

/* 
  Needed to render multiple components on one route... 
  For example, we want all routes that start with "/patient"
  to render the dashboard, so we need to create a new version
  of the Dashboard that has Outlet at the end.
  
  The outlet lets other components deeper down the route chain
  render.
  
  e.g. "/patient/practitioner-list" wants to render the PractitionerList component,
  but that won't appear unless the component rendered by the "/patient" route has an
  outlet. This decorator function decorates ('adds to') the component with that outlet.
*/
function withOutlet(component) {
  const Component = component; // To use as JSX, the name must be capitalized.
  return (
    <>
      <Component />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Background />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/practitioner" element={withOutlet(PracDash)}>
            {/* Practitioner routes/components go here */}
          </Route>

          <Route path="/patient" element={withOutlet(Dashboard)}>
            <Route path="practitioner-list" element={<PractitionerList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Just for reference, not used anywhere
function AlternateApp() {
  const [userType, setType] = useState("patient");
  const dashboardUserMap = {
    patient: Dashboard,
    practitioner: PracDash,
  };
  const DashboardForUser = dashboardUserMap[userType];
  return <></>;
}

export default App;
