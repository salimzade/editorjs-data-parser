export const quote = (caption: string, text: string) => {
  let quoteValue = '';
  quoteValue += `<blockquote class="ejs-blockquote">
                    ${text}
                    <footer class="ejs-blockquote__footer">${caption}</footer>
                 </blockquote>`;
  return quoteValue;
};
