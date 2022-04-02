import { createNewProject } from "../../lib/mongodb";

export default async function createProject(req, res) {
    await createNewProject(req.body).then(db_answer=>{
        if(db_answer.acknowledged){
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });
}