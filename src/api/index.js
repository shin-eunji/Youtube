import axios from 'axios';

const FetchConsts = {
    GET: 'get',
    POST: 'post'
}

const request = async (url, method, data = {}) => {
    try {
        const config = {
            method,
            url,
        }
        if(method === FetchConsts.GET) {
            config.params = data
        } else {
            config.data = data
        }
        return (await axios(config))
    } catch(e) {
        if(e.response?.status === 401) {
            // 로그인 화면으로 이동
        }
    }

}

const Fetch = {
    get: (url, data) => request(url, FetchConsts.GET, data),
    post: (url, data) => request(url, FetchConsts.POST, data)
}

const API = {
    playList: (data) => Fetch.get(`https://www.googleapis.com/youtube/v3/search`, data),
}

export default API;