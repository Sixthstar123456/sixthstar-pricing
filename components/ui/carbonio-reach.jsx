import React from "react";
import PropTypes from "prop-types";

const cards = [
	{
		count: "432",
		title: "Completed Event",
	},
	{
		count: "133",
		title: "Game Completed",
	},
	{
		count: "641",
		title: "Completed Fund",
	},
	{
		count: "313",
		title: "Completed Ticket",
	},
];

const CardItem = ({ item }) => (
	<>
		<h3 className="text-[45px] text-blue-600 font-black mb-2">{item.count}</h3>
		<h5 className="text-lg font-medium opacity-80">{item.title}</h5>
	</>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Numbers7 = () => {
	return (
		<section className="ezy__numbers7 light py-20  pb-20md:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
					<h1 className="text-3xl md:text-[45px] font-bold mb-6">
                    Carbonio Reach
					</h1>
					
				</div>
				<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center mt-12">
					{cards.map((item, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
							<CardItem item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Numbers7;