import Dashboard from "./pages/dashboard/home";
import { router } from "./main";
import Footer from "./components/footer";
import Headeradmin from "./components/admin/header";
import Newsadmin from "./pages/dashboard/news";
import Addnews from "./pages/dashboard/add-news";
import editNews from "./pages/dashboard/edit-new";

const print = (dashboard) => {
    document.getElementById("header").innerHTML = Headeradmin.render();
    document.getElementById("app").innerHTML = dashboard;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(Newsadmin.render());
    },
    "/admin/news/add": () => {
        print(Addnews.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        console.log(id);
        print(editNews.render(id));
    }

});
router.resolve();