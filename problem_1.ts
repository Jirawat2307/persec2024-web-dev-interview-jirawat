const convertToRGB = (colorCode: string): string => {
    if (colorCode.length == 4 || colorCode.length == 7) {
        if (!colorCode.startsWith("#")) {
            return colorCode + " is a wrong color code!";
        }

        let slice_code: string = colorCode.slice(1, colorCode.length);

        if (slice_code.length == 3) {
            slice_code = slice_code.concat(slice_code);
        }

        let red_color: number = parseInt(slice_code.slice(0, 2), 16);
        let green_color: number = parseInt(slice_code.slice(2, 4), 16);
        let blue_color: number = parseInt(slice_code.slice(4, 6), 16);

        if (Number.isNaN(red_color) || Number.isNaN(green_color) || Number.isNaN(blue_color)) {
            return colorCode + " is a wrong color code!";
        }

        return "{r: " + red_color + ", g: " + green_color + ", b: " + blue_color + "}";
    } else {
        return colorCode + " is a wrong color code!";
    }
};

console.log(convertToRGB("#FF9933"));
console.log(convertToRGB("#ff9933"));
console.log(convertToRGB("#FFF"));
console.log(convertToRGB("#000"));
