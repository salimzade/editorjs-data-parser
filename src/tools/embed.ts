export const embed = (param: { height: number; embed: any }) => {
    let embedValue = '';
    embedValue += `<iframe style="border: none;" width='100%' height='${
        param.height + 100
    }' src='${param.embed}'></iframe>`;
    return embedValue;
};
