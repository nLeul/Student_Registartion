/* eslint-disable require-jsdoc */
//import User from "/main.js"
import {Courses,User} from "/main.js"
function loginAuthentication() {
    const userId = document.getElementById("user");
    const password = document.getElementById("password");
    let users = [{ "user1": new User("john", "doe", "123456789", "student", "password1", "123") },
    { "user2": new User("leul", "tarik", "12345678910", "student1", "password2", "1234") }];
    for (let user of users) {
        if (user._id === userId && user._password === password) {

            //document.getElementById("myForm").style.display="none";

        }
        else {
            //document.getElementById("myForm").reset();
        }

    }
}
function course() {
    const courses = [{ "c1": new Courses("Fpp", "400", "cs400") },
    { "c2": new Courses("Mpp", "401", "cs401") },
        { "c3": new Courses("DB", "456", "cs456") }].sort();
    for (let course of courses) {
        document.getElementById("Courses").value += JSON.stringify(course);
    }
   

}
document.getElementById("login").addEventListener("click", loginAuthentication());
document.getElementById("viewCourse").addEventListener("click", course);





