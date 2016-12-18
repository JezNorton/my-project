import * as ORM from "Sequelize";
import { Sequelize, LoggingOptions } from 'Sequelize';
import { initCourseModel } from "./initCourseModel"

const dbUrl = 'localhost:64002';
const userName = 'postgres';
const password = 'Password1';
const options = {
    benchmark: true,
    logging: console.log,
    dialect: 'postgres',
    port: 64002
}
const sequelize = new ORM('complete-typescript-course', userName, password, options);

export const CourseModel = initCourseModel(sequelize);
