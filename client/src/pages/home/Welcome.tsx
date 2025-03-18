import Megalovania from "../../assets/mega_cut.mp4";

import GameyButton from "../../components/GameyButton";
import { useState } from "react";

function Welcome() {
	const [timesClicked, setTimesClicked] = useState(0);

	const uselessButtonMessages = [
		"Smatch that button!!!",
		"Nothing happenned???",
		"Oh yeah that's normal.",
		"But anyway...",
	];

	const incrementTimesClicked = () => {
		setTimesClicked(timesClicked + 1);
	};

	return (
		<section className="px-9 py-14 my-3 bg-indigo-900 flex flex-col  m-auto items-center text-center font-game relative">
			<video
				playsInline={true}
				autoPlay={true}
				muted={true}
				loop={true}
				className="absolute h-full w-full object-cover top-0 z-1 opacity-30"
			>
				<source src={Megalovania} type="video/mp4" />
				Your browser does not support the video tag
			</video>
			<div className="flex flex-col  m-auto items-center text-center z-10">
				<h2 className="mb-6 lg:text-4xl md:text-3xl text-xl md:drop-shadow-[0_4px_0_black] drop-shadow-[0_3px_0_black] linear-text-gradient w-[70%]">
					Welcome to my totally boring website !
				</h2>
				<p className="text-xs w-[70%] text-white mb-2 drop-shadow-[0_3px_0_black]">
					This is basically an anti-website.
					<br /> I work on it on my free time. Because I have a lot.
					Because I don't have a job <br /> *wink*
				</p>
				<GameyButton
					onClick={incrementTimesClicked}
					classes="mt-5 bg-sky-400 opacity-90 shake py-3 md:text-base text-sm"
				>
					{uselessButtonMessages[timesClicked % 4]}
				</GameyButton>
			</div>
		</section>
	);
}

export default Welcome;
