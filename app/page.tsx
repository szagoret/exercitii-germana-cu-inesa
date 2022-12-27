import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Content from "app/components/Content";


export default function Home() {
    return (
        <div className="bg-slate-100">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}