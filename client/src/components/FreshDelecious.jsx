

export default function FreshDelicious(){
    return(
        <>
            <div className="bg-white py-20">
                <div className="flex flex-col gap-10">
                        <h1 className="text-center font-bold text-4xl">Fresh, delicious and healthy</h1>
                    <div className="max-w-7xl mx-auto mt-5">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col justify-center gap-5 p-5">
                                <p className="text-center md:text-start">Weirdly really good. These flavors work really well 
                                    together. A friend recommended I try these juices and 
                                    now I can't start work without them.</p>
                                <span className="font-semibold text-center md:text-start">Jasper Ayawan</span>
                            </div>

                            <div className="flex flex-col justify-center gap-5 p-5">
                                <p className="text-center md:text-start">This smoothie totally changed my world. And now I don't have
                                     to trick my kids into eating their vegetables :)</p>
                                <span className="font-semibold text-center md:text-start">Jasper Ayawan</span>
                            </div>

                            <div className="flex flex-col justify-center gap-5 p-5">
                                <p className="text-center md:text-start">Very good for a Saturday morning breakfast! I can't believe my
                                     tastebuds, and I've never felt better.</p>
                                <span className="font-semibold text-center md:text-start">Jasper Ayawan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}