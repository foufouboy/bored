import GameyButton from "../../components/GameyButton";
import Logo from "../../assets/logo.png";
import { useState } from "react";

function Header() {
	const [sideNavActive, setSideNavActive] = useState(false);

	const switchSideNav = () => {
		setSideNavActive(!sideNavActive);
	};

	return (
		<header className="flex relative font-game p-5 px-7 justify-between rounded-md items-center">
			<div className="title">
				<a href="/" className="flex items-center gap-3">
					<img
						src={Logo}
						alt="A boring logo"
						className="w-[3.5rem] sm:w-[3rem] hidden sm:block"
					/>
					<h1 className="font-game text-2xl sm:block after:content-['(like,_really.)'] after:text-slate-400 after:block after:text-[.6rem]">
						Bored
					</h1>
				</a>
			</div>
			<nav className="hidden md:flex grow justify-between">
				<ul className="flex w-full justify-center gap-[15%] pr-5">
					<li className="text-[#60cfee] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
						<a href="#">Blog</a>
					</li>
					<li className="text-[#e0ad12] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
						<a href="#">Enter</a>
					</li>
					<li className="text-[#0abb97] drop-shadow-[1px_1px_black] hover:underline decoration-2 cursor-pointer">
						<a href="#">About</a>
					</li>
				</ul>
			</nav>
			<GameyButton onClick={switchSideNav} classes="md:hidden">
				Menu
			</GameyButton>
			<nav
				className={`ease-in md:hidden z-20 side-nav top-full right-0 w-full absolute max-w-[800px] ${
					sideNavActive ? "" : "pointer-events-none"
				}`}
			>
				<ul className="flex flex-col w-full items-center text-inherit">
					<li
						className={`drop-shadow-[1px_1px_black] text-[white] bg-[#60cfee] active:text-[#60cfee] active:bg-white cursor-pointer py-1 border-4 border-black border-solid w-full text-center transition-opacity delay-200 ${
							sideNavActive
								? "opacity-100 delay-200"
								: "opacity-0 delay-600"
						}`}
					>
						Blog
					</li>
					<li
						className={`drop-shadow-[1px_1px_black] text-white bg-[#e0ad12] active:text-[#e0ad12] active:bg-white cursor-pointer py-1 border-b-4 border-x-4 border-black border-solid  w-full text-center transition-opacity delay-400 ${
							sideNavActive ? "opacity-100" : "opacity-0"
						}`}
					>
						Enter
					</li>
					<li
						className={`drop-shadow-[1px_1px_black] text-white bg-[#0abb97] active:text-[#0abb97] active:bg-white cursor-pointer py-1 border-b-4 border-x-4 border-black border-solid  w-full text-center transition-opacity ${
							sideNavActive
								? "opacity-100 delay-600"
								: "opacity-0 delay-200"
						}`}
					>
						About
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
