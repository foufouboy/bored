import Logo from "./assets/logo.png";
import "./index.css";
import GameyButton from "./components/GameyButton";

function App() {
	return (
		<>
			<header className="flex bg-white shadow-sm p-5 justify-between rounded-md items-center">
				<div className="title">
					<a href="/" className="flex items-center gap-3">
						<img
							src={Logo}
							alt="A boring logo"
							className="w-[3.5rem] sm:w-[3rem]"
						/>
						<h1 className="font-game text-2xl hidden sm:block after:content-['(like,_really)'] after:text-slate-400 after:block after:text-[.6rem]">
							Bored
						</h1>
					</a>
				</div>
				<nav className="hidden md:flex font-game grow justify-between">
					<ul className="flex w-full justify-center gap-[15%] pr-5">
						<li className="text-[#60cfee] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
							<a href="#">Home</a>
						</li>
						<li className="text-[#e0ad12] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
							<a href="#">Coin</a>
						</li>
						<li className="text-[#0abb97] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
							<a href="#">Enter</a>
						</li>
					</ul>
				</nav>
				<GameyButton classes="md:hidden">Menu</GameyButton>
			</header>
			<main></main>
		</>
	);
}

export default App;
