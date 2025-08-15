import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Cart from "./components/Cart";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/card" element={<Card />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}
