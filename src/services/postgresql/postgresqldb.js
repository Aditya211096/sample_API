const Sequelize = require('sequelize');
const config = require('../../config/config.js')
var knex = require('knex')

 let dbconnection;

function GetDBConnection() {
  if (dbconnection !== undefined) {
    return dbconnection;
  } else {
    var _knex = knex({
      client: "pg",
      version: "9.5",
      connection:  {
        host : config.host,
        user : config.username,
        password : config.password,
        database : config.database
      }
    });
    return _knex;
  }
}

function GetDBDisconnection(_knex) {
  if (_knex !== null) {
    _knex.destroy();
  }
}


/**
 * create user into the users table
 *
 * @param  {String} username
 */

exports.createUser = async (payload) => {
  dbconnection = null;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").insert(payload)
      .then(success => {
        resolve("successfully inserted.");
      })
      .catch(error => {
        GetDBDisconnection(dbconnection);
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

  /**
 * get user data from the users table
 *
 * @param  {String} username
 */
exports.getUsers = async (payload) => {
  dbconnection = null;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").select('id', 'username')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          GetDBDisconnection(dbconnection);
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};

/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.updateuser = async (payload) => {
  dbconnection = null;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .update({ 'username': payload.username })
      .then(success => {
        if (success) {
          resolve("updated sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        GetDBDisconnection(dbconnection);
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.deleteUser = async (payload) => {
  dbconnection = null;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .del()
      .then(success => {
        if (success) {
          resolve("deleted sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        GetDBDisconnection(dbconnection);
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

// getMembers
exports.getMembers = async (payload) => {
  var dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("member").select('ID', 'Name')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};
