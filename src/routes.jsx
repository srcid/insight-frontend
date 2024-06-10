import { Routes as DomRoutes, Route } from "react-router-dom";
import Home from "./routes/home";
import City from "./routes/city";

export default function Routes() {
  return (
    <DomRoutes>
      <Route
        path="cidade"
        element={<City />}
      />
      <Route
        path="*"
        element={<Home />}
      />
    </DomRoutes>
  );
}