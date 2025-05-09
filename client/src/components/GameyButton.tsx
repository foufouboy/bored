import * as React from "react";

type Color = "black" | "blue" | "orange" | "green";

interface GameyButtonProps {
	color?: Color;
	classes?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler;
}

const colors: Record<Color, string> = {
	black: "border-black active:bg-black active:text-white",
	blue: "to-do",
	orange: "to-do",
	green: "to-do",
};

function GameyButton({
	classes = "",
	children,
	color = "black",
	onClick,
}: GameyButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`font-game px-5 py-1 border-inset border-3 cursor-pointer ${classes} ${colors[color]}`}
		>
			{children}
		</button>
	);
}

export default GameyButton;
