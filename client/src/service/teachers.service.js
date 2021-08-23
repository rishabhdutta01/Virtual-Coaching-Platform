import runtimeEnv from "@mars/heroku-js-runtime-env"
import axios from 'axios'

const env = runtimeEnv()
const REACT_APP_API_URL = "http://localhost:5000/api"

export default class TeacherService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${ REACT_APP_API_URL }/teachers`,
            //withCredentials: true
        })
    }

    getTeachers = () => this.apiHandler.get('/getAllTeachers')
    getTheTeacher = teacherId => this.apiHandler.get(`/getTheTeacher/${teacherId}`)
    getTeacher = userId => this.apiHandler.get(`/getOneTeacher/${userId}`)
    saveTeacher = teacherInfo => this.apiHandler.post(`/newTeacher/`, teacherInfo)
    editTeacher = (teacherId, teacherInfo) => this.apiHandler.put(`/editTeacher/${teacherId}`, teacherInfo)
    deleteTeacher = teacherId => this.apiHandler.delete(`/deleteTeacher/${teacherId}`)
}