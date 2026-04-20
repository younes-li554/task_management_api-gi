const Project = require('../models/Project');

const createProject = async (data) => {
    return await Project.create(data);
};

const getProjects = async () => {
    return await Project.find().populate('owner members');
};

module.exports = { createProject, getProjects };