
import {
  PayloadResponse,
} from "../../services/response.service.js";
import { createSchool, getAllSchools, updateSchool, deleteSchool } from "./schools.helper.js";



export const createSchoolController = async (req, res) => {
  console.log("Function createSchool Execution Started");
  console.log("Function createSchool req ", req.body);
  // console.log("Function createSchool res", res);

  try {
    const { name, address, street, suburb, postcode, state, registedStudents } = req.body;

    const school = await createSchool(name, address, street, suburb, postcode, state, registedStudents);

    res
      .status(200)
      .json(PayloadResponse("Create school Success", school));
  } catch (err) {
    console.error("createSchool : err : ", err);
  }
};

export const getAllSchoolsController = async (req, res) => {
  console.log("Function getAllSchools Execution Started");
  try {
    const allSchools = await getAllSchools();

    res
      .status(200)
      .json(PayloadResponse("Get All Schools Success", allSchools));
  } catch (err) {
    console.error("getAllSchools : err : ", err);
  }
};

export const updateSchoolController = async (req, res) => {
  console.log("Function updateSchool Execution Started");
  try {
    const { id } = req.params;
    const allSchools = await updateSchool(id);

    res
      .status(200)
      .json(PayloadResponse("Update Schools Success", allSchools));
  } catch (err) {
    console.error("updateSchool : err : ", err);
  }
};

export const deleteSchoolController = async (req, res) => {
  console.log("Function deleteSchool Execution Started");
  try {
    const { id } = req.params;
    const allSchools = await deleteSchool(id);

    res
      .status(200)
      .json(PayloadResponse("Delete Schools Success", allSchools));
  } catch (err) {
    console.error("deleteSchool : err : ", err);
  }
};