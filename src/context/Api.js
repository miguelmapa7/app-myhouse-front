//const server = "http://localhost:3000";
const server = "https://app-myhouse.herokuapp.com";
const apiRegister = `${server}/user`;
const apiLogin = `${apiRegister}/auth`;
const apiProduct = `${server}/product`;
const apiContacto = `${server}/contacto`;

export { apiRegister, apiLogin, apiProduct, apiContacto };
