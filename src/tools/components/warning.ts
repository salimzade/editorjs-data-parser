export const warning = (params: { title: string; message: string }) => {
  return `<figure id='ejs-warning-figure' class="ejs-warning">
                <figcaption>${params.title}</figcaption>
                <p class="ejs-warning__p">${params.message}</p>
            </figure>`;
};
