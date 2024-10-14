import got from 'got';

async function getCountUsers() {

	try {

		const response = await got.get('https://my-webservice.moveecar.com/users/count', {
			responseType: 'json',
		});

		const { body } = response;
		const { total } = body;
		return { total };

	} catch (error) {

		console.error('An error occurred when trying to fetch getCountUsers', error);

		return { total: 0 };
	}
}

// Add total from service with 20
async function computeResult() {
	/**
	 ** The await operator was missing,
	 ** which would led to an error as the function getCountUsers would run synchronously.
	 */
	const { total } = await getCountUsers();
	return total + 20;
}

computeResult().then((result) => console.log(result));
