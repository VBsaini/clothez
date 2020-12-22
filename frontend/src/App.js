import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/categories/Categories";
function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Categories className="Categories"></Categories>
        </div>
    );
}

export default App;
