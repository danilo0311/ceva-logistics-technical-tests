const { getCollection } = require("../../database/Utils/Utils");

/**
 * * MongoDb collection users with schema
 * {
	email: string;
	first_name: string;
	last_name: string;
	roles: string[];
	last_connection_date: Date;
	addresses: {
		zip: number;
		city: string;
	}[]:
 * }
 * *
 * * Complete the aggregation so that it sends user emails by 
 * * role ({_id: 'role', users: [email,...]})
 * * db.collections('users').aggregate(...); 
 */

class Aggregate {

	usersEmailsByRole = async () => {

		const users = await getCollection('users', 'ceva_logistics');

		const query = [
			{
				$unwind: "$roles",

			},
			{
				$group: {
					_id: "$roles",
					users: { $push: "$email" }
				}
			}
		];

		const result = await users.aggregate(query).toArray();
		return result;

	};

}

module.exports = { Aggregate };