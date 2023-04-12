import Header from "./components/headerComp/Header";
import Nav from "./components/navComp/Nav";
import Ads from "./components/adsComp/Ads";
import Footer from "./components/footerComp/Footer";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import NewsFeed from "./pages/NewsFeed";
import ChartDash from "./pages/ChartDash";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <>
            <Header logoTitle='Jordan' />
            <main style={style.mainCont}>
                <Nav />
                <section>
                    <Routes>
                        <Route
                            path='/home'
                            element={
                                <Home
                                    aboutPara='
                                            Enjoy taking a look at my design. It is a little project for
                                            class at Full Sail. This project was created using React some
                                            JavaScript, CSS and HTML. Hope you like it, it is a work in
                                            progress..'
                                    homeUserTitle='Noobie J'
                                />
                            }
                        />

                        <Route path='dashBoard' element={<DashBoard />} />

                        <Route path='newsFeed' element={<NewsFeed />} />

                        <Route path='comments' element={<Comments />} />

                        <Route path='chartDash' element={<ChartDash />} />

                        <Route path='userProfile' element={<UserProfile />} />
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
        flexDirection: "row",
        gridTemplateArea: "",
        marginTop: ".5rem",
        border: "1px solid yellow",
        width: "100%",
        height: "100%",
    },
};
