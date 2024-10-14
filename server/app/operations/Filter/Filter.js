const { getCollection } = require("../../database/Utils/Utils");

/**
 * * Complete the query, you have a variable that contains a piece of text to search for.
 * * Search by exact email, starts with first or last name and only users logged in for 6 months
 * * 
 * * db.collections('users').find(...);
 * 
 * * What should be added to the collection so that the query is not slow?
 * 
 * * To improve the query performance an index should be added. 
 * * Even tough MongoDB includes the _id as the default index,
 * * it doesn't hurt and it is recommended to choose an index yourself based on your needs.
 * * In this case I chose the email as the index for the users collection.
 */

const searchText = 'Danilo';

class Filter {

	byEmail = async (email) => {

		const users = await getCollection('users', 'ceva_logistics');
		const dateLimit = new Date();

		dateLimit.setMonth(dateLimit.getMonth() - 6);

		const query = {

			$and: [
				{
					last_connection_date: { $gt: dateLimit }
				},
				{
					email: email
				},
				{
					$or: [
						{
							first_name: { $regex: `^${searchText}`, $options: 'i' },
						},
						{
							last_name: { $regex: `^${searchText}`, $options: 'i' },
						}
					]
				}
			],

		};

		const result = await users.find(query).toArray();
		return result;

	};

	getUserByEmail = async (email) => {

		const users = await getCollection('users', 'ceva_logistics');

		const query = {
			$and: [ { email: { $regex: `${email}`, $options: 'i' } } ]
		};

		const result = await users.find(query).toArray();
		return result;

	};


}

module.exports = { Filter };