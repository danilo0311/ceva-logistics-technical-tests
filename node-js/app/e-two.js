import got from 'got';
// Call web service and return total vehicles, (got is library to call url)
async function getTotalVehicles() {

	try {

		const response = await got.get('https://my-webservice.moveecar.com/vehicles/total', {
			responseType: 'json'
		});

		const { body } = response;
		const { total } = body;
		return { total };


	} catch (error) {

		console.error('error while trying to fetch total Vehicles', error);
		return { total: 0 };

	}

}

async function getPlurial() {

	const { total } = await getTotalVehicles();

	if (total <= 0) {

		return 'none';

	} else if (total <= 10) {

		return 'few';

	}

	return 'many';

}

getPlurial().then(response => console.log(response));