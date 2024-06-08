type Data = {
    nameStr: string;
    digits: number;
    otherStr: string;
};

const getNumber = (str: string): number => {
    let match = str.match(/\d+/);

    if (!match) {
        return Infinity;
    }

    return parseInt(match[0]);
};

const sortFunction = (arr: string[]): string[] => {
    let data: Data[] = [];

    for (let index = 0; index < arr.length; index++) {
        let temp = {
            nameStr: arr[index].slice(0, 2),
            digits: getNumber(arr[index]),
            otherStr: arr[index].replace(arr[index].slice(0, 2), "").replace(getNumber(arr[index]).toString(), ""),
        };

        data = [...data, temp];
    }

    data.sort((a, b) => {
        return a.nameStr.localeCompare(b.nameStr) || a.digits - b.digits;
    });

    let result: string[] = [];

    for (let index = 0; index < data.length; index++) {
        const dataWithIndex = data[index];

        const combineOb = dataWithIndex.nameStr.concat(dataWithIndex.digits.toString()).concat(dataWithIndex.otherStr);

        result = [...result, combineOb];
    }

    return result;
};

console.log(sortFunction(["TH19", "SG20", "TH2"]));
console.log(sortFunction(["TH10", "TH3Netflix", "TH1", "TH7"]));
