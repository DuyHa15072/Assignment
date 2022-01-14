import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return /* html */ `
            <h1 class="text-3xl my-10 font-bold text-[#272f54]">News Page</h1>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;