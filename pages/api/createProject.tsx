import { createNewProject } from "../../lib/mongodb";

const AUTH_TOKEN = process.env.AUTH_TOKEN;

export default async function createProject(req, res) {
    if (req.body.token == AUTH_TOKEN) {
        try {
            let project = {title:req.body.title, description:req.body.description, thumbnail_url:req.body.thumbnail_url, github_url:req.body.github_url}
            await createNewProject(project).then(db_answer=>{
                if(db_answer.acknowledged){
                    res.status(200).end();
                } else {
                    res.status(500).end();
                }
            });
        } catch (e) {
            res.status(400).end();
        }
    } else {
        res.status(401).end();
    }      
}