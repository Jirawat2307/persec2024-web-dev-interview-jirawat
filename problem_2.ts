const getNumber = (str: string): number => {
    let match = str.match(/\d+/);

    if (!match) {
        return Infinity;
    }

    return parseInt(match[0]);
};

function sortFunction(arr: string[]): string[] {
    return arr.sort((a, b) => {
        let na = getNumber(a);
        let nb = getNumber(b);

        return na - nb;
    });
}

console.log(sortFunction(["TH19", "SG20", "TH2"]));
console.log(sortFunction(["TH10", "TH3Netflix", "TH1", "TH7"]));
