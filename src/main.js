/* eslint-disable space-before-function-paren */
import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/new";
import AdminNewsAddPage from "./pages/admin/new/add";
import AdminEditPost from "./pages/admin/new/edit";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async(content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news/:id": (value) => print(DetailNewsPage, value.data.id),
    "/admin/dashboard": () => { print(DashboardPage); },
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/admin/news/add": () => print(AdminNewsAddPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
});

router.resolve();