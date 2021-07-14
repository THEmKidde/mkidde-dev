import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
    // Get file names under /projects
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map(fileName => {
        // Remove ".json" from file name to get id
        const id = fileName.replace(/\.json$/, '');

        // Read json file
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // Parse fileContents to json object
        const jsonResult = JSON.parse(fileContents);

        // Combine the json object with the id¨
        return {
            id,
            ...jsonResult
        }
    })

    // Sort projects by date
    return allProjectsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    })
}

export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDirectory);

    // Return an array of project names
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.json$/, '')
            }
        }
    });
}

export function getProjectData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Parse fileContents to json object
    const jsonResult = JSON.parse(fileContents);

    // Combine the json object with the id
    return {
        id,
        ...jsonResult
    }
}