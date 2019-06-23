function getDbUsername() {
  return process.env.REACT_APP_DB_USERNAME;
 
 }
 
 function getDbPassword() {
   console.log(process.env.REACT_APP_DB_PASSWORD);
   return process.env.REACT_APP_DB_PASSWORD;
 }

 module.exports = {
   mongoURI: `mongodb+srv://${getDbUsername()}:${getDbPassword()}@shopping-list-cluster-fui4u.mongodb.net/items_database?retryWrites=true&w=majority`
 };
