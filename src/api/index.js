import request from '../utils/request';

class Http{
    constructor() {
        this.axios=request; // axios 对象
    }

    fetchData(url){
        return this.axios.get(url);
    }
}


export default new Http()
