import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";

const Home = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full md:h-56 lg:h-screen">
                    <img src={"https://i.ibb.co/Mpx9NP3/unnamed.jpg"} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full md:h-56 lg:h-screen">
                    <img src={'https://i.ibb.co/LZ0tR4T/2022-12-31.jpg'} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full md:h-56 lg:h-screen">
                    <img src={'https://i.ibb.co/wsM8bDb/2023-08-12.jpg'} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-center text-4xl font-bold mb-5">Tourist Spot</h2>
                <AllTouristsSpot />
            </div>

        </div>
    );
};

export default Home;