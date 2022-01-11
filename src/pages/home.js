import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    render() {
        return /*html*/ `
        <header>
            ${Header.render()}
        </header>
             <div class="banner mt-[10px]">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
            <footer class="bg-[#272f54] py-[13px] mt-[10px]">
                ${Footer.render()}
            </footer>
        `;
    },
};
export default HomePage;