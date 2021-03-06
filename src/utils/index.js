/* eslint-disable space-before-function-paren */
/* eslint-disable import/prefer-default-export */
export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
        if (component.afterRender) component.afterRender();
    }
};