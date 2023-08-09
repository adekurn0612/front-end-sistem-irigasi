import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-sistem-irigasi.vercel.app/',
});