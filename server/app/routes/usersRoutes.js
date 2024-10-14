const express = require('express');
const router = express.Router();

const { Filter } = require('../operations/Filter/Filter');
const { Aggregate } = require('../operations/Aggregate/Aggregate');
const { Update } = require('../operations/Update/Update');

const filter = new Filter();
const aggregate = new Aggregate();
const update = new Update();

const { getCollection } = require('../database/Utils/Utils');

router.get('/get/users/:email', async (request, response) => {

	try {

		const email = request.params.email;
		const users = await filter.getUserByEmail(email, (result) => result);
		response.json(users);

	} catch (err) {

		console.error(err);
		response.status(500).send(err);

	}

});

router.get('/get/users', async (request, response) => {

	try {

		const User = await getCollection('users', 'ceva_logistics');
		const users = await User.find({}).toArray();

		response.json(users);


	} catch (err) {

		console.error(err);
		response.status(500).send(err);

	}

});

router.get('/get/filter', async (request, response) => {

	const email = 'danilomurillo0311@gmail.com';
	const result = await filter.byEmail(email, (result) => result);

	response.json(result).end();

});

router.get('/get/aggregate', async (request, response) => {

	const result = await aggregate.usersEmailsByRole((result) => result);
	response.json(result).end();

});

router.get('/get/update', async (request, response) => {

	const resultLastConnectionUpdate = await update.lastConnectionDate((result) => result);
	const resultRoleUpdate = await update.addAdminRole((result) => result);
	const resultZipAndCityUpdate = await update.zipCodeAndCity((result) => result);

	const result = {
		resultLastConnectionUpdate,
		resultRoleUpdate,
		resultZipAndCityUpdate
	};

	response.json(result).end();

});

module.exports = router;
