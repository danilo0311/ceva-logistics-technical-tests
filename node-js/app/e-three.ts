export const transformFirstLetterToUpperCase = ({ text }: { text: string | null; }) => {

	try {

		if(!text) {
			console.log('text to transform is null');
			return null;
		};

		const firstLetter = text.substring(0, 1).toUpperCase();
		const restOfTheWord = text.substring(1).toLowerCase();

		const transformedText = firstLetter.concat(restOfTheWord);

		return transformedText;

	} catch(error) {

		console.error('Error while trying to transform', error);
		return null;

	}

};

export const getCapitalizeFirstWord = (text: string): string => {

	try {

		const content = text.split(' ');
		const processText = content?.map((text: string) => {

			const result = text.length > 1
				? transformFirstLetterToUpperCase({ text })
				: text;

			return result;

		}).join(' ');

		return processText;

	} catch(error) {

		console.log('Failed to capitalize. 1 argument was expected but got null');
		return text;

	}

};

console.log(getCapitalizeFirstWord('danilo'));

console.log(getCapitalizeFirstWord('danilo arancibia'));

// console.log(getCapitalizeFirstWord(null));

console.log(transformFirstLetterToUpperCase({ text: null }));

console.log(transformFirstLetterToUpperCase({ text: 'danilo' }));