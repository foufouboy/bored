import Gyarados from "../../assets/gyarados.gif";
import Raichu from "../../assets/raichu_bis.png";
import Snorlax from "../../assets/snorlax.png";

function Main() {
	return (
		<main className="sm:p-10 p-8 font-display font-[400] text-[1.1rem] text-slate-800">
			<div className="pokemon-sections grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				<section className="flex flex-col rounded-b-xl overflow-hidden">
					<div className="bg-[#b5c4fa] puzzle-piece h-[5rem] w-[10rem] self-center rounded-t-xl relative inverted-radius z-0"></div>
					<div className="bg-[#b5c4fa] rounded-xl">
						<img
							src={Gyarados}
							alt="Gyaaaarados"
							className="transform -translate-x-[-25%] rotate-330 drop-shadow-[-10px_5px_0_black]"
						/>
						<p className="px-8 pb-9">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aliquam asperiores, delectus animi placeat
							eaque obcaecati laudantium excepturi sequi harum
							quisquam ab illum laboriosam architecto enim alias
							quis facilis perspiciatis voluptate! Est nemo cum
							veniam dignissimos nam corporis fuga. Consequuntur
							laborum recusandae tempore sit libero facilis hic
							voluptatibus, earum qui eveniet!
						</p>
					</div>
				</section>
				<section className="bg-[#faed75] rounded-xl overflow-hidden h-[fit-content]">
					<div className="rounded-xl shadow-[-15px_0px_0_0_white]">
						<p className="px-8 pt-9 mb-[15px]">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aliquam asperiores, delectus animi placeat
							eaque obcaecati laudantium excepturi sequi harum
							quisquam ab illum laboriosam architecto enim alias
							quis facilis perspiciatis voluptate! Est nemo cum
							veniam dignissimos nam corporis fuga. Consequuntur
							laborum recusandae tempore sit libero facilis hic
							voluptatibus, earum qui eveniet!
						</p>
						<img
							src={Raichu}
							alt="Raichu!!!"
							className="transform -translate-x-[-25%] rotate-10 scale-120 drop-shadow-[0px_8px_0_black]"
						/>
					</div>
					<div className="bg-white puzzle-piece h-[5rem] w-[13rem] self-center rounded-tr-xl relative inverted-radius raichu z-0"></div>
				</section>
				<section className="bg-[#f0b38a] rounded-xl flex flex-col md:col-span-2 xl:col-span-1 overflow-hidden">
					<div className="puzzle-piece h-[5rem] w-[10rem] self-end rounded-xl rounded-br-none relative z-0 bg-white inverted-radius snorlax"></div>
					<div className="rounded-xl shadow-[10px_0_0_white] flex flex-col">
						<img
							src={Snorlax}
							alt="Snorlax..."
							className="drop-shadow-[8px_-3px_0_black] mt-[25px] self-end lg:self-center lg:scale-120 lg:translate-y-[-40px] lg:translate-x-[10px]"
						/>
						<p className="px-8 pb-9 mt-[]">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Aliquam asperiores, delectus animi placeat
							eaque obcaecati laudantium excepturi sequi harum
							quisquam ab illum laboriosam architecto enim alias
							quis facilis perspiciatis voluptate! Est nemo cum
							veniam dignissimos nam corporis fuga. Consequuntur
							laborum recusandae tempore sit libero facilis hic
							voluptatibus, earum qui eveniet!
						</p>
					</div>
				</section>
			</div>
			<div className="reminder-sections">
				<section></section>
				<section></section>
				<section></section>
			</div>
		</main>
	);
}

export default Main;
