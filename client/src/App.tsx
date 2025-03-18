import "./index.css";

import Header from "./pages/home/Header";
import Main from "./pages/home/Main";
import Welcome from "./pages/home/Welcome";

function App() {
	return (
		<div className="hero bg-white h-full shadow-lg rounded-md">
			<Header />
			<Welcome />
			<Main />
		</div>
	);
}

export default App;
