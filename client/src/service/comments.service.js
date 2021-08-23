import runtimeEnv from "@mars/heroku-js-runtime-env";
import axios from 'axios'

const env = runtimeEnv()
const REACT_APP_API_URL = "http://localhost:5000/api"

export default class CommentsService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${ REACT_APP_API_URL }/comments`,
            //withCredentials: true
        })
    }

    getCourseComments = courseId => this.apiHandler.get(`/getCourseComments/${courseId}`)
    saveComment = commentInfo => this.apiHandler.post(`/newComment`, commentInfo)
    deleteComment = commentId => this.apiHandler.delete(`/deleteComment/${commentId}`)
    editComment = (commentId, commentInfo) => this.apiHandler.put(`/editComment/${commentId}`, commentInfo)
}