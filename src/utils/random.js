/**
 * result can equal range below and not equal range top
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export default random;