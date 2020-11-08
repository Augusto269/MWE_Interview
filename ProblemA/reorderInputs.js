exports.reorderInputs = async (numberCases, cases) => {
    let response = {};
    if (cases.length == 0 || numberCases == 0 || cases.length !== numberCases) {
        throw new Error("Error on validation , cases or numberCases have and error");
    }
    for (let index = 0; index < numberCases; index++) {
        let words = cases[index].split(" ");
        words.reverse();
        response[`Case #${index}:`] = words;
    }
    return response
}