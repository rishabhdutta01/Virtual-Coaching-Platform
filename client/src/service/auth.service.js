import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from 'axios'

const env = runtimeEnv()

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: "http://localhost:5000/api",
                headers: {
                    'content-type': 'application/json'
                }
        }
            )
    }

    signup = credentials => this.apiHandler.post('/signup', credentials)
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
}