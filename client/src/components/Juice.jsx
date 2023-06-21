import Header from "./Header";


export default function Juice(){

    let data = [
    	{
        title: "One", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua.`
      }, {
        title: "Two", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt`
      },{
        title: "Three", 
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna. `
      }
    ];

    return(
        <>
            <Header/>
            <div className="px-4 md:max-w-5xl mx-auto flex flex-col justify-center items-center gap-5 mt-20">
                <h1 className="text-5xl font-bold">Juices</h1>
                <p className="text-center font-semibold text-base text-zinc-600">The drinks that started it all.
                 Our juices are made from the freshest fruits and natural ingredients using a cold-pressed 
                 method that keeps nutrients and enzymes intact.</p>
            </div>

            <div className="py-10">
                <div className="flex gap-5 justify-center items-center">
                    <div className="w-1/3">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    )
}