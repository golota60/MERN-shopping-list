const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

module.exports = {
  mongoURI: `mongodb+srv://${USERNAME}:${PASSWORD}@shopping-list-cluster-fui4u.mongodb.net/test?retryWrites=true&w=majority`
};