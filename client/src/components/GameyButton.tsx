import * as React from "react";

interface GameyButtonProps {
	color?: string;
	reverseColor?: string;
	classes?: string;
	children?: React.ReactNode;
}

function GameyButton({
	classes = "",
	children,
	color = "black",
	reverseColor = "white",
}: GameyButtonProps) {
	return (
		<button
			className={`font-game px-5 py-1 border-inset border-3 border-${color} cursor-pointer active:bg-${color} active:text-${reverseColor} ${classes}`}
		>
			{children}
		</button>
	);
}

export default GameyButton;
