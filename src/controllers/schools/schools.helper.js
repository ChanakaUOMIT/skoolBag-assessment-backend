import mongoose from "mongoose";

//Model
import School from "../../models/school.model.js"
export const createSchool = async (name, address, street, suburb, postcode, state, registedStudents) => {
    console.log(`createSchool`);
    try {
        const newSchool = new School({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            address: address,
            // address: {
            // street: street,
            // suburb: suburb,
            // postcode: postcode,
            // state: state,
            // },
            registedStudents: registedStudents
        });
        console.log(`newSchool : `, newSchool);


        const addSchool = await newSchool.save();
        return addSchool;
    } catch (err) {
        throw err;
    }
};

export const getAllSchools = async () => {
    console.log(`Getting All Schools`);
    try {
        const schools = "All schools";
        return schools;
    } catch (err) {
        throw err;
    }
};

export const updateSchool = async (id) => {
    console.log(`updateSchool ${id}`);
    try {
        const schools = "updateSchool";
        return schools;
    } catch (err) {
        throw err;
    }
};


export const deleteSchool = async (id) => {
    console.log(`deleteSchoolController ${id}`);
    try {
        const schools = "deleteSchoolController";
        return schools;
    } catch (err) {
        throw err;
    }
};