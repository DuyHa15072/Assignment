import NewsList from "../components/newsList";

const NewsPage = {
    async render() {
        return /* html */ `
            <h1 class="text-3xl my-10 font-bold text-[#272f54]">News Page</h1>
            ${await NewsList.render()}
        `;
    },
};
export default NewsPage;