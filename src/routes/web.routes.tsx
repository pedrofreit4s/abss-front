import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UseWebGlobalStyles } from "../shared/web/styles/global";
/*
 * Pages imports
 **/
import HomePage from "../pages/web/home";

export function WebRoutes() {
  return (
    <UseWebGlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </UseWebGlobalStyles>
  );
}
