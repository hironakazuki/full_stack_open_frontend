import axios from 'axios'
const baseUrl = '/api/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// const createNew = async (newObject) => {
//   const config = {
//     headers: { Authorization: token },
//   }

//   const response = await axios.post(baseUrl, newObject, config)
//   return response.data
// }

// const update = async (id, updateObject) => {
//   const response = await axios.put(`${baseUrl}/${id}`, updateObject)
//   return response.data
// }

// const deleteBlog = async (id) => {
//   console.log(token)
//   const config = {
//     headers: { Authorization: token }
//   }

//   const response = await axios.delete(`${baseUrl}/${id}`, config)
//   return response.data
// }

export default { getAll }