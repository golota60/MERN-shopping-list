function getDbCredentials() {
  return {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  };
}

const { username, password } = getDbCredentials();

module.exports = {
  mongoURI: `mongodb+srv://${username}:${password}@shopping-list-cluster-fui4u.mongodb.net/items_database?retryWrites=true&w=majority`,
};
