import React from "react";
import Img1 from "../../image/aboutus1.jpeg";
import Img2 from "../../image/aboutus2.jpeg";
import Img3 from "../../image/aboutus3.jpeg";
import Img4 from "../../image/aboutus4.jpeg";
import Img5 from "../../image/aboutus5.jpeg";
import Img6 from "../../image/aboutus6.jpeg";

const AboutUs = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2
                            style={{ fontFamily: "'Amiri Quran', serif" }}
                            className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "
                        >
                            About Us
                        </h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Founded in 2023 by Deivendran K, Plutus Emporia stands as a
                            dynamic startup organization dedicated to revolutionizing the
                            financial landscape. Serving as a beacon of innovation, Plutus
                            Emporia specializes in providing a comprehensive Financial and
                            Business portal. Our platform goes beyond conventional boundaries,
                            offering in-depth market coverage, meticulous analysis, and
                            invaluable expert opinions. At Plutus Emporia, we are committed to
                            empowering individuals and businesses with the knowledge and tools
                            they need to navigate the complexities of the financial world.
                            Whether you're an investor seeking insightful market trends or a
                            business owner aiming for strategic growth, our platform is
                            designed to cater to your unique needs. Driven by a passion for
                            excellence, Plutus Emporia sets itself apart through a blend of
                            cutting-edge technology and a team of seasoned professionals. We
                            understand that informed decision-making is the cornerstone of
                            success, and we strive to be your trusted partner on the journey
                            to financial prosperity. Join us at Plutus Emporia, where
                            innovation meets expertise, and together, we'll shape a brighter
                            and more prosperous future for all.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img1}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Gold
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Gold protector
                                    </h1>
                                    <p className="leading-relaxed">
                                        Gold, the protector of wealth, is delivered to us by God and
                                        has withstood the test of time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img2}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Fuel Industry
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Natural Gas
                                    </h1>
                                    <p className="leading-relaxed">
                                        There is an urgent need to stop subsidizing the fossil fuel
                                        industry and other renewable energy sources.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img3}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Stock
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Golden Boll
                                    </h1>
                                    <p className="leading-relaxed">
                                        Investors are often categorised as bulls and bears. A “bull”
                                        by definition is an investor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img4}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Growth
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        financial growth
                                    </h1>
                                    <p className="leading-relaxed">
                                        financial growth An investment in knowledge pays the best
                                        interest." — Benjamin Franklin
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img5}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Market direction
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Holden Caulfield
                                    </h1>
                                    <p className="leading-relaxed">
                                        I can't change the direction of the wind, but I can adjust my sails to always reach my destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={Img6}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        You learn and Earn
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Alper Kamu
                                    </h1>
                                    <p className="leading-relaxed">
                                        A candlestick is a way of displaying information about an asset's price movement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
