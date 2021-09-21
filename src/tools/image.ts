export const image = (param: { file: { url: string }; caption: string }) => {
    return `<img src='${param.file.url}' alt='${param.caption}'/>`;
};
