import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from 'axios'

const env = runtimeEnv()
const REACT_APP_API_URL = "http://localhost:5000/api"

export default class FilesService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: `${ REACT_APP_API_URL }/files`,
      //withCredentials: true
    })
  }

  uploadImage = imageForm => this.apiHandler.post('/upload', imageForm)
}