// ** THE ASSOCIATOINS WILL BE BETWEEN THE POST THAT BELONGS TO THE USER, THE COMMENTS ON THE POST THAT BELONG TO THAT USER AND THE POST BELONGS TO THE 

const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
