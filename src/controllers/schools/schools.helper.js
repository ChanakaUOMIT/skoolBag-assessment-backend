import mongoose from "mongoose";
//Model
import School from "../../models/school.model.js"

/**
 * Get school by ID
 * @param {School Id} school_id 
 */
export const GetSchoolById = async (school_id) => {
    console.log(`Getting school ${school_id}`);
    try {
        const school = await School.findById(school_id);
        console.log(`GetSchoolById : `, school);

        if (!school) throw Error("School not Exists:400");
        return school;
    } catch (err) {
        throw err;
    }
};

/**
 * Create School
 * @param {School name} name 
 * @param {School Address} address 
 * @param {Resisted students} registedStudents 
 */
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

/**
 * Get All Schools
 * @param {Current page} page 
 * @param {pagination limit} limit 
 */
export const getAllSchools = async (page = 1, limit = 100) => {
    console.log(`Getting All Schools`);
    try {
        const query = {
        };
        const paginate_config = {
            page: page,
            limit: limit,
            sort: { createdAt: -1 },
        };
        const schools = await School.paginate(query, paginate_config);
        return schools;
    } catch (err) {
        throw err;
    }
};

/**
 * Update school Details
 * @param {school ID} id 
 * @param {School Name} name 
 * @param {School Address} address 
 * @param {Registed students} registedStudents 
 */
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

/**
 * Delete School
 * @param {Schhol ID} id 
 */
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

/**
 * Search school by name and address
 * @param {Search keyword} keyword 
 * @param {current page} page 
 * @param {pagination limit} limit 
 */
export const searchSchools = async (keyword, page = 1, limit = 100) => {
    console.log(`searchSchoolController : helper : `, keyword);
    try {
        const query = {
            $text: { $search: keyword },
        };

        const paginate_config = {
            page: page,
            limit: limit,
            sort: { createdAt: -1 },
        };
        console.log("searchSchools ~ query ", query)

        const school = await School.paginate(query, paginate_config);
        console.log("searchSchools ~ school", school)

        return school;
    } catch (err) {
        throw err;
    }
};