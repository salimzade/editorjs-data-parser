import {
    checklist,
    code,
    embed,
    header,
    image,
    link,
    list,
    paragraph,
    quote,
    raw,
    table,
    warning,
} from './tools';

const editorJsParser = (value: any[]) => {
    let editorData = '';

    try {
        value.forEach((element: { type?: string; data: any; }) => {
            switch (element.type) {
                case 'checklist':
                    editorData += checklist(element.data.items);
                    break;
                case 'code':
                    editorData += code(element);
                    break;
                case 'embed':
                    editorData += embed(element.data);
                    break;
                case 'header':
                    editorData += header(element.data.text, element.data.level);
                    break;
                case 'image':
                    editorData += image(element.data);
                    break;
                case 'link':
                    editorData += link(element.data.link);
                    break;
                case 'list':
                    editorData += list(element.data.items);
                    break;
                case 'paragraph':
                    editorData += paragraph(element.data.text);
                    break;
                case 'quote':
                    editorData += quote(element.data.caption, element.data.text);
                    break;
                case 'raw':
                    editorData += raw(element.data.html);
                    break;
                case 'table':
                    editorData += table(element);
                    break;
                case 'warning':
                    editorData += warning(element.data);
                    break;
                default:
                    editorData += '';
            }
        });
    } catch(error){
        console.error(error);
    }

    return editorData;
};

exports.editorJsParser = editorJsParser;
