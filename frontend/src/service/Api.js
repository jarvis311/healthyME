import axios from 'axios';


const url = 'http://localhost:5000/getoneproduct';

export const getProduct = async (_id) => {
    _id = _id || '';
    return await axios.get(`${url}/${ _id }`);

};