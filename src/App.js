import Header from "./components/headerComp/Header";
import Nav from "./components/navComp/Nav";
import Main from "./components/mainComp/Main";
import Ads from "./components/adsComp/Ads";
import Footer from "./components/footerComp/Footer";
// import ResetBtn from "./components/buttonsComp/ResetBtn";
// import SubmitBtn from "./components/buttonsComp/SubmitBtn";
// import EditBtn from "./components/buttonsComp/EditBtn";

import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ChartDash from "./pages/ChartDash";
import Comments from "./components/commentsComp/Comments";

function App() {
    return (
        <>
            <Header logoTitle='Jordan' />
            <main style={style.mainCont}>
                <Nav />
                <section>
                    <Routes>
                        <Route path='/main' element={<Main />} />
                        <Route path='dashBoard' element={<DashBoard />} />
                        <Route path='comments' element={<Comments />} />
                        <Route path='chartDash' element={<ChartDash />} />
                    </Routes>
                </section>
                <Ads />
            </main>
            <Footer />
        </>
    );
}

export default App;

const style = {
    mainCont: {
        display: "flex",
        gridTemplateArea: "",
        marginTop: ".5rem",
        border: "1px solid yellow",
        width: "100%",
        height: "100%",
    },
};
