class ReverseEncoder {
    public charList = "abcdefghijklmnopqrstuvwxyz";
    public reverseCharList = "zyxwvutsrqponmlkjihgfedcba";

    public encode(str: string): string {
        let result: string = "";
        let arr: string[] = str.split("");

        for (let i = 0; i < arr.length; i++) {
            let charIndex: number = this.charList.indexOf(arr[i].toLowerCase());
            if (charIndex === -1) {
                result = result.concat(arr[i]);
            } else {
                result = result.concat(this.reverseCharList[charIndex]);
            }
        }

        return result.split(" ").reverse().join(" ");
    }

    public decode(str: string): string {
        let result: string = "";
        let arr: string[] = str.split("");

        for (let i = 0; i < arr.length; i++) {
            let charIndex: number = this.reverseCharList.indexOf(arr[i].toLowerCase());
            if (charIndex === -1) {
                result = result.concat(arr[i]);
            } else {
                result = result.concat(this.charList[charIndex]);
            }
        }

        return result.split(" ").reverse().join(" ");
    }
}

const reverseEncoder = new ReverseEncoder();

console.log(reverseEncoder.encode("Hello world"));
console.log(reverseEncoder.decode("dliow svool"));
