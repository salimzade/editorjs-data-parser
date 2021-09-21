export const warning = (params: { title: string; message: string }) => {
    return `<figure id='figure'>
                <figcaption>${params.title}</figcaption>
                <p>${params.message}</p>
            </figure>`;
};
