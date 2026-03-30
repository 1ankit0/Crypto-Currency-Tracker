import axios from 'axios'

const coinData = async({start=0, limit=20})=>{
    try {
        const res = await axios.get(`https://api.coinlore.net/api/tickers/`,
            {
                params: {
                    start,
                    limit
                }
            }
        )
        return res.data
    } catch (error) {
        console.log('error in fetching coinData:', error)
        return error
    }
}

export default coinData