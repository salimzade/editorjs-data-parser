let $f97f8deda914455a$var$value = '';
const $f97f8deda914455a$export$3ebae31328f22dc5 = (param)=>{
    $f97f8deda914455a$var$value = '';
    param.forEach((items)=>{
        $f97f8deda914455a$var$value += `<div class="ejs-form-check">
                    <input class="ejs-form-check__input" type="radio" name="ejsRadios" id="ejsRadio" value="option1" ${items.checked ? 'checked' : ''}>
                    <label class="ejs-form-check__label" for="ejsRadio">
                    ${items.text}
                    </label>
                </div>
      `;
    });
    return $f97f8deda914455a$var$value;
};


const $e4b44153e6cf3ed2$export$6565f9f03506010b = (param)=>{
    return `<pre class="ejs-code-block">${param.data.code}</pre>`;
};


const $5ce53dee6195f307$export$c889f2fcc19dbf12 = ()=>{
    return `<div class="ejs-delimiter"></div>`;
};


const $6eea23872bc94b47$export$2be46bb7e96db87f = (param)=>{
    let embedValue = '';
    embedValue += `<iframe style="border: none;" width='100%' height='${param.height + 100}' src='${param.embed}'></iframe>`;
    return embedValue;
};


const $f01ac79a478c88f0$export$38e42c68cf43b5d4 = (param, type)=>{
    let headerValue = '';
    switch(type){
        case 1:
            headerValue += `<h1 class="ejs-header ejs-h1">${param}</h1>`;
            break;
        case 2:
            headerValue += `<h2 class="ejs-header ejs-h2">${param}</h2>`;
            break;
        case 3:
            headerValue += `<h3 class="ejs-header ejs-h3">${param}</h3>`;
            break;
        case 4:
            headerValue += `<h4 class="ejs-header ejs-h4">${param}</h4>`;
            break;
        case 5:
            headerValue += `<h5 class="ejs-header ejs-h5">${param}</h5>`;
            break;
        case 6:
            headerValue += `<h6 class="ejs-header ejs-h6">${param}</h6>`;
            break;
        default:
            headerValue += '';
    }
    return headerValue;
};


const $5dfec52a6397f247$export$5c452ff88e35e47d = (param)=>{
    const imgParams = `${param.stretched ? 'ejs-img__fullwidth' : ''} ${param.withBorder ? 'ejs-image__withBorder' : ''} ${param.withBackground ? 'ejs-img__background' : ''}`;
    // let imgSrc;
    //
    // if (param.url) {
    //   imgSrc = param.url;
    // } else if (param.image.path === 'absolute') {
    //   imgSrc = param.file.url;
    // } else {
    //   imgSrc = path.image.path.replace(/<.+>/, (match, p1) => param.file[p1]);
    // }
    return `<div class="${imgParams}"><img class="ejs-image" src="${param.file.url}" alt="${param.caption}"></div>`;
};


const $3aa7985ede99463e$export$9c30223ca0a664fb = (param)=>{
    return `<a href='${param}' target='_blank'>${param}</a>`;
};


const $e4dd3b96a2f6d9f9$export$8837f4fc672e936d = (param)=>{
    let listValue = '';
    listValue += `<ol>`;
    param.forEach((items)=>{
        listValue += `<li>${items}</li>`;
    });
    listValue += `</ol>`;
    return listValue;
};


const $d0d8e84dbeb34e6f$export$9c206ddddb32a9b = (param)=>{
    return `<p class="ejs-paragraph">${param}</p>`;
};


const $5cb9a3fc1d477a24$export$ee7a15c61bfdeb11 = (caption, text)=>{
    let quoteValue = '';
    quoteValue += `<blockquote class="ejs-blockquote">
                    ${text}
                    <footer class="ejs-blockquote__footer">${caption}</footer>
                 </blockquote>`;
    return quoteValue;
};


const $6cede1c531edc031$export$1776c186c69df29e = (param)=>{
    let rawValue = '';
    rawValue += param;
    return rawValue;
};


const $1c5f620bfcf47d1e$export$9852986a3ec5f6a0 = (params)=>{
    let tableHeader = '';
    let tableBody = '';
    let template = '';
    params.data.content[0].forEach((header)=>{
        tableHeader += `<th>${header}</th>`;
    });
    for(let i = 1; i < params.data.content.length; i++){
        tableBody += `<tr>`;
        params.data.content[i].forEach((body)=>{
            tableBody += `<td>${body}</td>`;
        });
        tableBody += `</tr>`;
    }
    template = `
    <table class='ejs-table'>
        <thead class='ejs-table__thead'>
            <tr>
                ${tableHeader}
            <tr>
        </thead>
        <tbody class="ejs-table__body">
            ${tableBody}
        </tbody>
    </table>
  `;
    return template;
};


const $e77f67580b962bae$export$491112666e282270 = (params)=>{
    return `<figure id='ejs-warning-figure' class="ejs-warning">
                <figcaption>${params.title}</figcaption>
                <p class="ejs-warning__p">${params.message}</p>
            </figure>`;
};




const $a8e101027d325e52$export$af0ff169fc5a6554 = (value)=>{
    let editorData = '';
    try {
        value.forEach((element)=>{
            switch(element.type){
                case 'checklist':
                    editorData += $f97f8deda914455a$export$3ebae31328f22dc5(element.data.items);
                    break;
                case 'code':
                    editorData += $e4b44153e6cf3ed2$export$6565f9f03506010b(element);
                    break;
                case 'delimiter':
                    editorData += $5ce53dee6195f307$export$c889f2fcc19dbf12();
                    break;
                case 'embed':
                    editorData += $6eea23872bc94b47$export$2be46bb7e96db87f(element.data);
                    break;
                case 'header':
                    editorData += $f01ac79a478c88f0$export$38e42c68cf43b5d4(element.data.text, element.data.level);
                    break;
                case 'image':
                    editorData += $5dfec52a6397f247$export$5c452ff88e35e47d(element.data);
                    break;
                case 'link':
                    editorData += $3aa7985ede99463e$export$9c30223ca0a664fb(element.data.link);
                    break;
                case 'list':
                    editorData += $e4dd3b96a2f6d9f9$export$8837f4fc672e936d(element.data.items);
                    break;
                case 'paragraph':
                    editorData += $d0d8e84dbeb34e6f$export$9c206ddddb32a9b(element.data.text);
                    break;
                case 'quote':
                    editorData += $5cb9a3fc1d477a24$export$ee7a15c61bfdeb11(element.data.caption, element.data.text);
                    break;
                case 'raw':
                    editorData += $6cede1c531edc031$export$1776c186c69df29e(element.data.html);
                    break;
                case 'table':
                    editorData += $1c5f620bfcf47d1e$export$9852986a3ec5f6a0(element);
                    break;
                case 'warning':
                    editorData += $e77f67580b962bae$export$491112666e282270(element.data);
                    break;
                default:
                    editorData += '';
            }
        });
    } catch (error) {
        console.error(error);
    }
    return editorData;
};


export {$a8e101027d325e52$export$af0ff169fc5a6554 as editorJsParser};
//# sourceMappingURL=index.js.map
