import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

export const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
    }
});
router.resolve();