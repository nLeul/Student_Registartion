/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
"use strict";
class User {
    constructor(fname, lname, phone, role, password, id) {
        this._fname = fname;
        this._lname = lname;
        this._phone = phone;
        this._role = role;
        this._password = password;
        this._id = id;
    }


}
class Student extends User {
    constructor(fname, lname, phone, role, password, id, entryYear, GPA) {
        super(fname, lname, phone, role, password, id);

        this._entrYear = entryYear;
        this._GPA = GPA;
    }

}
class Faculty extends User {
    constructor(fname, lname, phone, role, password, id, department) {
        super(fname, lname, phone, role, password, id);
        this._department = department;
    }
}
class Courses {
    constructor(courseName, courseid, courseCode) {
        this._courseName = courseName;
        this._courseid = courseid;
        this._courseCode = courseCode;
    }



}
export {
    Courses, User
}