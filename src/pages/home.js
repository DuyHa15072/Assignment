/* eslint-disable semi */
/* eslint-disable space-before-blocks */
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */ `
            <div class="mx-auto">
                ${Header.render()}
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div>
                    ${await NewsList.render()}
                </div>
                ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        Header.afterRender()
    },
};
export default HomePage;