import { baseApi } from '@/plugins/axios';

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const add = (body) => baseApi.post(`${api}`, body);
const del = (id) => baseApi.delete(`${api}/${id}`);
const update = (body, id) => baseApi.put(`${api}/${id}`, body);

export { list, add, del, update };
