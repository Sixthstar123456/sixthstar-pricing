import React from "react";

const SelfManagedCallToAction = () => {
	return (
		<section className="ezy__cta8 light py-14 md:py-0 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="bg-[#eff4fd] dark:bg-[#1c293a] rounded-3xl overflow-hidden">
					<div className="grid grid-cols-12">
						<div className="col-span-12 lg:col-span-6 bg-black bg-opacity-10 flex items-center justify-center p-4">
							<img
								src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747205576/Untitled_design_13_y9bztr.png"
								alt="CTA"
								className="max-w-full h-auto max-h-[360px] object-contain"
							/>
						</div>
						<div className="col-span-12 lg:col-span-6">
							<div className="flex items-center h-full py-12 px-6 sm:px-12">
								<div>
									<h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
										Join with us for more information
									</h2>
								

									<div>
										<button className="px-7 py-3 min-w-[110px] bg-transparent border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-opacity-90 transition mb-3 lg:mb-0 lg:mr-2">
											Learn More
										</button>
										<button className="px-7 py-3 min-w-[110px] bg-blue-600 border border-blue-600 text-white hover:text-white hover:bg-opacity-90 hover:border-opacity-90 transition">
											Quote Now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelfManagedCallToAction;
