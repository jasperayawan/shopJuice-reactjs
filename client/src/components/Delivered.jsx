

export default function Delivered(){
    return(
        <>
            <div className="px-2 md:max-w-5xl mx-auto flex">
                <div className="min-h-screen py-10 flex justify-center items-center flex-col md:flex-row gap-10">
                <div className="md:w-1/2 overflow-hidden block">
                    <img src="../src/assets/bottle3.jpg" alt="" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center gap-5">
                    <h3>COLD-PRESSED JUICE</h3>
                    <h2 className="text-5xl text-black font-bold text-center">Delivered straight to your door</h2>
                    <p className="text-center text-xl">Order by 8pm and wake up to your order of plant-based beverages on your doorstep! Available in local areas.</p>
                    <div>
                        <button className="bg-black px-5 py-2 text-white">Learn more</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}