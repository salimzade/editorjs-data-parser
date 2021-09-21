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

export const parser = (value: { array: any[] }) => {
    let editorData = '';

    value.array.forEach((element) => {
        switch (element.type) {
            case 'checklist':
                editorData += checklist(element.data.items);
                break;
            case 'code':
                editorData += code(element);
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

    return editorData;
};
