
export default function Featured(){
    return(
        <>
            <div className="w-full bg-black text-white min-h-[40vh] flex justify-center items-center">
                <div className="max-w-6xl mx-auto">
                    <div className="py-10">
                        <div className="flex flex-col md:flex-row gap-20 md:gap-2">
                            <div className="flex flex-col justify-center items-center gap-4"> 
                                <h2 className="text-3xl font-bold">Plant-Based</h2>
                                <p className="text-center">Suitable for vegans and non-vegans alike! 
                                    Plants are powerful and healing with incredible
                                     nutritional value</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4"> 
                                <h2 className="text-3xl font-bold">Certified Organic</h2>
                                <p className="text-center">We only use organic and non-GMO produce. Our healthy drinks taste as good as they make you feel.</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4"> 
                                <h2 className="text-3xl font-bold">Sustainable Packaging</h2>
                                <p className="text-center">Bottled in glass with lids made of recycled plastic. We're proud to introduce our bottle-return program.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}