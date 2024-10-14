const { MongoClient } = require('mongodb');

class Connection {

	static connection = null;

	static async createNewConnection(database) {

		if (this.connection) {

			return this.connection;

		}

		try {

			const client = new MongoClient('mongodb://localhost:27017');
			await client.connect();

			this.connection = client.db(database);
			return this.connection;

		} catch (error) {

			console.error(error);
			console.error(`Couldn't establish a connection to MongoDB`);
			return null;

		}
	}

}

const getConnection = async (database) => {

	return await Connection.createNewConnection(database);

};

module.exports = { Connection, getConnection };
