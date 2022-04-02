import { MongoClient } from 'mongodb';
const assert = require('assert');

// Connection uri
const uri = process.env.MONGODB_URI;

// Database name
const dbName = "mkidde-dev";

// Create MongoClient
const client = new MongoClient(uri);

export default async function getAllProjects() {
    return new Promise((resolve) => {
        client.connect(async function(err, client) {
            assert.equal(null, err);
            console.log("Successfully connected to server");
    
            const db = client.db(dbName);
    
            const projects = await db.collection("project_information").find().toArray();

            projects.map((project)=>{
                project._id = project._id.toString();
            })
            
            client.close();

            resolve(projects);
        });
    });
}

export async function getProjectsFromTitle(titles) {
    return new Promise((resolve) => {
        client.connect(async function(err, client) {
            assert.equal(null, err);
            console.log("Successfully connected to server");
    
            const db = client.db(dbName);
    
            let projects = [];

            new Promise((res)=> {
                titles.forEach(async (title, index, array)=>await db.collection("project_information").find({"title": title}).toArray()
                .then(project=>{
                    projects.push(project[0])
                    if (index == array.length-1) res();
                }));
            }).then(()=>{
                client.close();

                projects.map((project)=>{
                    project._id = project._id.toString();
                })

                resolve(projects);
            });
        });
    });
}

export async function createNewProject(project) {
    return new Promise((resolve) => {
        client.connect(async function(err, client) {
            assert.equal(null, err);
            console.log("Successfully connected to server");
    
            const db = client.db(dbName);
    
            const projects = await db.collection("project_information").insertOne(project)
            
            client.close();

            resolve(projects);
        });
    });
}