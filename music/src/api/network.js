import axios from 'axios'

//进行全局配置
axios.defaults.baseURL = 'http://192.168.1.63:3000'
axios.defaults.timeout = 3000

export default {
    get(path='',data={}){
        return new Promise((resolve,reject)=>{
            axios.get(path,{
                params:data
            }).then((response)=>{
                resolve(response.data);
            })
                .catch((error)=>{
                    reject(error.data);
                })
        })
    },
    post(path='',data={}){
        return new Promise((resolve,reject)=>{
            axios.post(path,data).then((response)=>{
                resolve(response.data);
            })
                .catch((error)=>{
                    reject(error.data);
                })
        })
    }
}