function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	let result = '';

	for (let i = 0; i <= 6; i++) {
		let [symbol, value] = obj[i];

		// Handle subtractive cases
		if (value === 1000) {
			while (num >= 1000) {
				result += 'M';
				num -= 1000;
			}
		}
		else if (value === 500) {
			if (num >= 900) {
				result += 'CM';
				num -= 900;
			}
			while (num >= 500) {
				result += 'D';
				num -= 500;
			}
			if (num >= 400) {
				result += 'CD';
				num -= 400;
			}
		}
		else if (value === 100) {
			while (num >= 100) {
				result += 'C';
				num -= 100;
			}
		}
		else if (value === 50) {
			if (num >= 90) {
				result += 'XC';
				num -= 90;
			}
			while (num >= 50) {
				result += 'L';
				num -= 50;
			}
			if (num >= 40) {
				result += 'XL';
				num -= 40;
			}
		}
		else if (value === 10) {
			while (num >= 10) {
				result += 'X';
				num -= 10;
			}
		}
		else if (value === 5) {
			if (num >= 9) {
				result += 'IX';
				num -= 9;
			}
			while (num >= 5) {
				result += 'V';
				num -= 5;
			}
			if (num >= 4) {
				result += 'IV';
				num -= 4;
			}
		}
		else if (value === 1) {
			while (num >= 1) {
				result += 'I';
				num -= 1;
			}
		}
	}

	return result;
}

module.exports = convertToRoman;