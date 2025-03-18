import githubIcon from "../../assets/github.svg";
import mailIcon from "../../assets/mail.png";
import chevronUp from "../../assets/chevrons-up.svg";

function Footer() {
	return (
		<footer className="relative flex h-[100px] flex-row items-center justify-center gap-3 font-game">
			<div className="links flex gap-3">
				<a
					href="https://github.com/foufouboy"
					target="_blank"
					className=""
				>
					<img
						src={githubIcon}
						alt="Github link"
						className="w-[30px]"
					/>
				</a>
			</div>
			<p className="disclaimer text-xs">foufouboy© 2025</p>
		</footer>
	);
}

export default Footer;
