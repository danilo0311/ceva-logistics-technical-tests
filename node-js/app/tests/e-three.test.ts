import { test, expect } from "@jest/globals";
import { getCapitalizeFirstWord, transformFirstLetterToUpperCase } from "../e-three";
import { spyOn } from "jest-mock";

test('should print Danny', async function() {

	expect(getCapitalizeFirstWord('danny')).toBe('Danny');

});

test('should print capitalized names', async function() {

	expect(getCapitalizeFirstWord('danilo humberto')).toBe('Danilo Humberto');

});


test('should log that theres no argument passed when 1 was expected', () => {

	expect(getCapitalizeFirstWord(null)).toBe(null);

});

test('should print what went wrong and null', () => {

	expect(transformFirstLetterToUpperCase({ text: null })).toBe(null);

});

test('should print the error message:text to transform is null', () => {

	const logSpy = spyOn(console, 'log');
	const result = transformFirstLetterToUpperCase({ text: null });

	expect(result).toBe(null);
	expect(logSpy).toHaveBeenCalledWith('text to transform is null');

	logSpy.mockRestore();

});

test('should print the error message:Failed to capitalize. 1 argument was expected but got null', () => {

	const text = null;
	const logSpy = spyOn(console, 'log');
	const result = getCapitalizeFirstWord(text);

	expect(result).toBe(null);
	expect(logSpy).toHaveBeenCalledWith('Failed to capitalize. 1 argument was expected but got null');

	logSpy.mockRestore();

});

