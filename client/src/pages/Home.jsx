import Header from "../components/Header";
import '../App.css'
import Featured from "../components/Featured";
import BestSeller from "../components/BestSellers";
import FreshMorning from "../components/FreshMorning";
import Topbar from "../components/Topbar";
import AnimateSlide from "../components/Animate-slide";
import Delivered from "../components/Delivered";
import Aboutus from "../components/aboutUs";
import JuiceShopNow from "../components/JuiceShopNow";
import FreshDelicious from "../components/FreshDelecious";
import Gallery from "../components/Gallery";
import Inbox from "../components/Inbox";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
            <Topbar/>
            <Header/>
            <div className="hero">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="max-w-xl mx-auto flex flex-col justify-center items-center gap-5">
                        <h1 className="text-center text-5xl font-bold text-white">Make the most of your mornings</h1>
                        <p className="text-white text-2xl text-center">The quickiest way to get in your fruits and veggies</p>
                        <button className="py-2 px-5 bg-black text-white text-2xl">Shop Juices</button>
                    </div>
                </div> 
            </div>
            <Featured/>
            <BestSeller/>
            <FreshMorning/>
            <AnimateSlide/>
            <Delivered/>
            <Aboutus/>
            <JuiceShopNow/>
            <FreshDelicious/>
            <Gallery/>
            <Inbox/>
            <Footer/>
        </>
    )
}