import mongoose from "mongoose";

//Model
import School from "../../models/school.model.js"


export const GetSchoolById = async (school_id) => {
    console.log(`Getting school ${school_id}`);
    try {
        const school = await School.findById(school_id);
        console.log(`GetSchoolById : `, school);

        if (!school) throw Error("School not Exists:400");
        return school;
    } catch (err) {
        throw Error("School not Exists:400");
    }
};
export const createSchool = async (name, address, registedStudents) => {
    console.log(`createSchool`);
    try {
        const newSchool = new School({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            address: address,
            registedStudents: registedStudents
        });
        console.log(`newSchool : `, newSchool);


        const addSchool = await newSchool.save();
        return addSchool;
    } catch (err) {
        throw err;
    }
};

export const getAllSchools = async (page = 1, limit = 10) => {
    console.log(`Getting All Schools`);
    try {
        const query = {
        };
        const paginate_config = {
            page: page,
            limit: limit,
            sort: { updatedAt: -1 },
        };
        const schools = await School.paginate(query, paginate_config);
        return schools;
    } catch (err) {
        throw err;
    }
};

export const updateSchool = async (id, name, address, registedStudents) => {
    console.log(`updateSchool ${id}`);
    try {
        const school = await GetSchoolById(id);

        school.name = name;
        school.address = address;
        school.registedStudents = registedStudents;
        await school.save();
        return school;
    } catch (err) {
        throw err;
    }
};


export const deleteSchool = async (id) => {
    console.log(`deleteSchoolController ${id}`);
    try {
        const school = await GetSchoolById(id);
        await school.remove();

        return school;
    } catch (err) {
        throw err;
    }
};