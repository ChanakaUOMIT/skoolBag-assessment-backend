
export const createSchool = async () => {
    console.log(`createSchool`);
    try {
        const school = "school created";
        return school;
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