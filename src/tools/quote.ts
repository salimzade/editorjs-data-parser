export const quote = (caption: string, text: string) => {
    let quoteValue = '';
    quoteValue += `<blockquote class="blockquote">
                    ${text}
                    <footer class="blockquote-footer">${caption}</footer>
                 </blockquote>`;
    return quoteValue;
};
