export const loginElements = {


username: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input",
password: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input",
submit: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button",


usernameInput: '[data-test= username]',
passwordInput: '[data-test= password]',
submitButton: '[data-test= login-button]',

header: '#header_container > div.primary_header > div.header_label > div',
cartContainer: '#shopping_cart_container',
openMenu: '#react-burger-menu-btn',
title: '[data-test = title]',
navbar: '#menu_button_container > div > div.bm-menu-wrap',
logoutButton: "[data-test = logout-sidebar-link]",
checkLoginPage: '#root > div > div.login_logo',
msgError: '[data-test=error]',


};


export const filterElements = {
    
    selectFilter: '[data-test = product-sort-container]',
    filterAz: '[data-test = product-sort-container]>option:nth-child(1)',
    filterZa: '[data-test = product-sort-container]>option:nth-child(2)',
    filterPriceLowToHigh: '[data-test = product-sort-container]>option:nth-child(3)',
    filterPriceHighToLow: '[data-test = product-sort-container]>option:nth-child(4)',
};

export const addCartElements = {
    buttonAdd: '[data-test="add-to-cart-sauce-labs-backpack"]',
    cartQtd: '#shopping_cart_container > a > span'
}

    listProducts: '[data-test = inventory-list]',
    itemListProducts: '[data-test=inventory-item]',
    itemListProducts: '[data-test=inventory-item-name]',
    itemNameProduct4: '[data-test=item-4-title-link]',
    itemPriceProduct: '[date-test=inventory-item-price]'
};
