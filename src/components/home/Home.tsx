import Model from "../gemini_model/Model"


function Home() {
    return (
        <>
            <div className="flex flex-col text-white w-full mt-[4rem] px-2 ">
                <div className="flex flex-col items-center text-center relative pt-[50px] md:pt-[100px]">
                    <h1 className="text-3xl font-medium pb-4 md:pb-9 md:text-5xl ">Building the Largest network of
                        <br />
                        <span className="text-green-400">EV chargers </span>
                        in India</h1>
                    <p className="text-xl pb-4 md:text-2xl md:pb-11">Discover &nbsp; | &nbsp; Charge &nbsp; | &nbsp; Pay
                    </p>
                    <div className="w-full max-w-xl px-4 rounded-xl ">
                        <img
                            className="w-full bject-contain "
                            src="/img1.jpg"
                        />
                    </div>

                </div>

                <div className="my-4 pt-5 flex flex-col items-center justify-center text-2xl md:text-4xl gap-1 font-medium">
                    <span>Join our network of <span>1000 </span>+</span>  
                    <span className="text-green-400">EV Charging Station</span>
                </div>
                <Model/>
            </div>


        </>
    )
}

export default Home
