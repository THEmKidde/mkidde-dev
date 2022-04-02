import { createNewProject } from "../lib/mongodb";

export default function createProject(req, res) {
    console.log("Create project: ");
    console.log(req.body);

    res.status(200).json({Test: "Hello"});
}