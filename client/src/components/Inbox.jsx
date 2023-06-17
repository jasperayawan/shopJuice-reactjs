import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Inbox(){
    return(
        <>
            <div className="min-h-[40vh] flex justify-center items-center">
                <div className="flex flex-col gap-5 justify-center items-center max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold">Get goodness delivered to your inbox</h1>
                    <p>Sign up and be the first to know about product launches, promotions and more!</p>
                    <div className='flex justify-center items-center'>
                    <input type="search" placeholder="Email" className="border-2 border-black w-full px-4 py-3"/>
                    <button className='px-4 py-4 border-2 border-black'>
                        <AiOutlineArrowRight/>
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}