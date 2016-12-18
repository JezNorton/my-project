import { Request, Response } from "express";

import { findAllCourses } from "../queries/findAllCourses";

export function apiGetAllCourses(req: Request, res: Response) {
    // throw new Error("Error occurred");
    findAllCourses()
        .then(() => { throw new Error('Error'); })
        .then(results => {
            res.status(200).json({ results });
        }).catch(err => res.status(500).send());

}