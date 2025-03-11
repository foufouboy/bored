import Gyarados from "../../assets/gyarados.gif";
import Raichu from "../../assets/raichu_bis.png";
import Snorlax from "../../assets/snorlax.png";

function Main() {
	return (
		<main className="p-5">
			<div className="pokemon-sections grid gap-5">
				<section className="bg-blue-500">
					<img src={Gyarados} alt="Gyaaaarados" />
				</section>
				<section className="bg-red-500">
					<img src={Raichu} alt="Raichu!!!" />
				</section>
				<section className="bg-green-500">
					<img src={Snorlax} alt="Snorlax..." />
				</section>
			</div>
			<div className="reminder-sections bg-red-600">
				<section></section>
				<section></section>
				<section></section>
			</div>
		</main>
	);
}

export default Main;
