import Header from "./components/headerComp/Header";
import Nav from "./components/navComp/Nav";
import Main from "./components/mainComp/Main";
import Ads from "./components/adsComp/Ads";
import Footer from "./components/footerComp/Footer";

function App() {
    return (
        <>
            <Header logoTitle='Jordan' />
            <main style={style.mainCont}>
                <Nav />
                <Main
                    mainAdTitle='Noobie J'
                    aboutPara='
              Enjoy taking a look at my design. It is a little project for class at Full Sail. This project was created using React some JavaScript, CSS and HTML. Hope you like it, it is a work in progress..
          '
                />
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
