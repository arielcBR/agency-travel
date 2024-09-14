import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";

export function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
