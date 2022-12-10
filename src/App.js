import Header from "./components/headerComp/Header";
import Nav from "./components/navComp/Nav";

function App() {
    return (
        <>
            <Header logoTitle='Jordan' />
            <main style={style.mainCont}>
                <Nav />
                {/* <MainAd
              mainAdTitle='Noobie J'
              aboutPara='
              Enjoy taking a look at my design. It is a little project for class at Full Sail. This project was created using React some JavaScript, CSS and HTML. Hope you like it, it is a work in progress..
          '
          /> */}
                {/* <Ads /> */}
            </main>
            {/* <Comments /> */}
            {/* <Footer /> */}
        </>
    );
}

export default App;

const style = {
    mainCont: {},
};
