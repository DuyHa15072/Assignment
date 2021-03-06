/* eslint-disable object-curly-spacing */
import {get } from "../api/posts";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />    
            <p>${data.desc}</p>
        `;
    },
};
export default DetailNewsPage;