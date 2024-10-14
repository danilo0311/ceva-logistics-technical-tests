const { getCollection } = require("../../database/Utils/Utils");
const { ObjectId } = require('mongodb');

/**
 ** lastConnectionDate
 **
 ** Update document ObjectId("5cd96d3ed5d3e20029627d4a"), 
 ** modify only last_connection_date with current date
 */

/**
 * * addAdminRole
 * * 
 * * Update document ObjectId("5cd96d3ed5d3e20029627d4a"), 
 * * add a role admin
 */

/**
 * * Update document ObjectId("5cd96d3ed5d3e20029627d4a"), 
 * * modify addresses with zip 75001 and replace city with Paris 1 
 */

class Update {

	lastConnectionDate = async () => {

		const users = await getCollection('users', 'ceva_logistics');
		const id = new ObjectId("5cd96d3ed5d3e20029627d4a");

		const filter = { _id: id };
		const update = { $currentDate: { last_connection_date: true } };

		const result = await users.updateOne(filter, update);
		return result;

	};

	addAdminRole = async () => {

		const users = await getCollection('users', 'ceva_logistics');
		const id = new ObjectId("5cd96d3ed5d3e20029627d4a");

		const filter = { _id: id };
		const update = { $addToSet: { roles: "Admin" } };

		const result = await users.updateOne(filter, update);
		return result;

	};

	zipCodeAndCity = async () => {

		const users = await getCollection('users', 'ceva_logistics');
		const id = new ObjectId("5cd96d3ed5d3e20029627d4a");

		const filter = { _id: id, "addresses.zip": 75001 };
		const update = {
			$set: {
				"addresses.$.city": "Paris 1"
			}
		};

		const result = await users.updateOne(filter, update);
		return result;

	};

}

module.exports = { Update };