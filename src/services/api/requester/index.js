import axios from 'axios'

const baseURL = 'http://localhost:3333'

const Api = axios.create({ baseURL })

export default Api
// export default function requester() {
//   return false
// }
