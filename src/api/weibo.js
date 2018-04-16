import axios from 'axios'

export default {
  searchUserByName (name, cb, errorCb) {
    let url = '/api/name/' + name
    axios.get(url)
      .then((response) => {
        cb(response.data)
      })
      .catch((error) => {
        errorCb(error)
      })
  },

  getCircleByUid (uid, withAddr, cb, errorCb) {
    let url = '/api/uid/' + uid
    if (withAddr) {
      url = url + '?with_addr=1'
    }
    axios.get(url)
      .then((response) => {
        cb(response.data)
      })
      .catch((error) => {
        errorCb(error)
      })
  }
}
