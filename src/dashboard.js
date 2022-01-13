import Dashboard from "./pages/dashboard/home";
import { router } from "./main";
import Footer from "./components/footer";
import Headeradmin from "./components/admin/header";
import Newsadmin from "./pages/dashboard/news";

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
    }

});
router.resolve();