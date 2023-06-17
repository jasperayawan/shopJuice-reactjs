import '../App.css'

export default function JuiceShopNow(){
    return(
        <>
            <div>
                <div className="px-4 flex justify-center items-center">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="md:w-1/2 imag1 min-h-screen flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center gap-5">
                                <h2 className='font-bold text-4xl'>Juice</h2>
                                <p className='text-center text-xl text-white'>The drinks that started it all. Our juices are made from the
                                     freshest fruits and natural ingredients using a cold-pressed
                                      method that keeps nutrients and enzymes intact.</p>
                                <div>
                                    <button className='px-5 py-3 text-white bg-black'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 imag2 min-h-screen flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-5">
                                <h2 className='font-bold text-4xl'>Seasonal Favorites</h2>
                                <p className='text-center text-xl'>The best of fresh, seasonal ingredients create healthy and satisfying 
                                    breakfast smoothies all year round. Spring is here, which means we're
                                     harvesting fresh fruits and veggies for our seasonal favorites!</p>
                                <div>
                                    <button className='px-5 py-3 text-white bg-black'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}