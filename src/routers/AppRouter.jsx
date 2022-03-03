import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage } from "../containers/contact-page/ContactPage";
import { Home } from "../containers/Home";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-with-me" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
