import "./index.css";

import Header from "./pages/home/Header";
import Main from "./pages/home/Main";
import Welcome from "./pages/home/Welcome";
import Footer from "./pages/home/Footer";

function App() {
	return (
		<div className="hero bg-white h-full shadow-lg rounded-md">
			<Header />
			<Welcome />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
