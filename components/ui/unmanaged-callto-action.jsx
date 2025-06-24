import React from "react";

const UnmanagedCall = () => {
	return (
		<section className="ezy__cta2 light relative overflow-hidden py-14 md:py- bg-blue-600">
			{/* shapes  */}
			<div className="w-[400px] h-[400px] bg-purple-100 bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
			<div className="w-[400px] h-[400px] bg-purple-100 bg-opacity-5 rounded-full -m-[100px] absolute right-0 bottom-0"></div>

			<div className="container relative px-4">
				<div className="grid grid-cols-12 justify-center text-center text-white">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 mx-auto">
						<div className="lg:px-16">
							<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
								Did you know?
							</h2>
							<p className="text-lg leading-6 mb-12">
								It’s easier to reach your savings goals when you have the right
								savings account.
							</p>
							<button
								type="submit"
								className="bg-white text-black py-3 px-7 rounded transition"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default UnmanagedCall;
