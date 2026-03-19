import axios from 'axios'

const coinData = ()=>{
    try {
        const res = axios.get()
        return res
    } catch (error) {
        console.log('error', error)
    }
}