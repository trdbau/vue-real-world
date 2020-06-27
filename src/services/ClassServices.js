import axios from 'axios'

export default class RESTService {
  constructor(instance = axios) {
    this.axios = instance
  }

  get(request) {
    return this.execute({
      methods: 'get',
      ...request,
    })
  }
}
