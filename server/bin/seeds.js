const mongoose = require('mongoose')
const Course = require('./../models/course.model')

//DATABASE
//Enter your database connection string here.
mongoose.connect("mongodb+srv://timz:pEj5toVxx4ZHLBsD@cluster0.zkdrf.mongodb.net/trainingPlatform?retryWrites=true&w=majority")

Course.collection.drop()

//Prepared these mock courses. Should be modified
const courses = [
    {
        title: 'Angular',
        price: 9.99,
        duration: 6.5
    },
    {
        title: 'React',
        price: 9.39,
        duration: 6.5
    },
    {
        title: 'Bootstrap',
        price: 9.99,
        duration: 10.25
    },
    {
        title: 'Javascript',
        price: 300,
        duration: 8
    },
    {
        title: 'SASS',
        price: 9.99,
        duration: 6.5
    },

]

//Code to add courses to mongodb
Course
    .create(courses)
    .then(allCoursesCreated => {
        console.log(`Created ${allCoursesCreated.length} courses`)
        mongoose.connection.close()
    })
    .catch(err => console.log('An error occured', err))