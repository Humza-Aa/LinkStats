import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import RegisterPage from "./Components/Content/RegisterPage/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Register" element={<RegisterPage />} />
        {/* <Route path="/CartPage" element={<CartPage />} />
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/ItemInfoPage" element={<ItemInfoPage />} />
        <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
