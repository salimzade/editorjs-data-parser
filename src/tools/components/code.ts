export const code = (param: { data: { code: any } }) => {
  return `<pre class="ejs-code-block">${param.data.code}</pre>`;
};
