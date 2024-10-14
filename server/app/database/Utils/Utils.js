const { getConnection } = require('../Connection/Connection');

let collectionInstance;

const getCollection = async (collection, database) => {

	if (!collectionInstance) {

		const connection = await getConnection(database);
		collectionInstance = connection.collection(collection);

	}

	return collectionInstance;

};

module.exports = { getCollection };
