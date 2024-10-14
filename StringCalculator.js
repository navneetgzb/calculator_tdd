class StringCalculator {

    /**
     * Adds the numbers from the given string, handling delimiters and exceptions.
     * @param {string} numbers - A string containing numbers separated by delimiters.
     * @returns {number} - The sum of the numbers.
     */
    add(numbers) {
        // Base case: if the input is an empty string, return 0.
        if (numbers === "") return 0;

        // Extract the custom delimiter (if any) and the actual number part.
        let { delimiter, numberPart } = this.getDelimiterAndNumbers(numbers);

        // Split the numbers by delimiter, newline (\n), or comma (,).
        let numList = numberPart.split(new RegExp(`[${delimiter}\n,]`));

         // Convert the numbers to integers, ignore empty strings, and sum them.
        return numList
            .filter(num => num !== "")
            .map(num => parseInt(num))
            .reduce((sum, num) => sum + num, 0);

    }

    /**
    * Determines the delimiter and the part of the string that contains numbers.
    * @param {string} numbers - A string which may have a custom delimiter.
    * @returns {Object} - An object with 'delimiter' and 'numberPart' properties.
    */
    getDelimiterAndNumbers(numbers) {
        // Check if the string starts with a custom delimiter definition, e.g. "//;\n1;2"
        if (numbers.startsWith("//")) {
            let delimiter = numbers[2];  // The custom delimiter is at position 2.
            let numberPart = numbers.substring(numbers.indexOf("\n") + 1);  // Get the part after the newline.
            return { delimiter, numberPart };
        }
        // Default case: use comma and newline as delimiters, return the full string.
        return { delimiter: "", numberPart: numbers };
    }
}

module.exports = StringCalculator; // Export the class for use in the test suite.
