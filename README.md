<p align="center">
  <img src="https://i.postimg.cc/hPPXmBFq/ejsp.png" width="256"/>
</p>

# EditorJs Data Parser

## Easily convert json data from editorjs to html elements
<br/>

[![npm](https://img.shields.io/npm/v/editorjs-data-parser)](https://www.npmjs.com/package/editorjs-data-parser)
[![npm](https://img.shields.io/npm/l/editorjs-data-parser)](https://www.npmjs.com/package/editorjs-data-parser)
[![npm](https://img.shields.io/npm/dm/editorjs-data-parser)]()
[![github](https://img.shields.io/github/stars/salimzade/editorjs-data-parser?style=social)](https://github.com/salimzade/editorjs-data-parser)

# Installaton
 `npm i editorjs-data-parser`
 
 `yarn add editorjs-data-parser`

# Suppoted tools

 :ok_hand: checklist

 :ok_hand: embed

 :ok_hand: head

 :ok_hand: link

 :ok_hand: list

 :ok_hand: marker

 :ok_hand: paragraph

 :ok_hand: quote

 :ok_hand: raw

 :ok_hand: table

 :ok_hand: code

 :ok_hand: warning

 :ok_hand: delimeter

# Usage example



```javascript
import EditorJS from "@editorjs/editorjs";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Delimiter from "@editorjs/delimiter";
import Marker from "@editorjs/marker";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import { editorJsParser } from "editorjs-data-parser";

const editor = new EditorJS({
  tools: {
    header: {
      class: Header,
      inlineToolbar: true
    },
    list: {
      class: List,
      inlineToolbar: true
    },
    checklist: CheckList,
    delimiter: Delimiter,
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    },
    image: {
      class: Image,
      config: {
        endpoints: {
          byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
          byUrl: "http://localhost:8008/fetchUrl" // Your endpoint that provides uploading by Url
        }
      }
    },
    checkList: CheckList,
    code: Code,
    raw: Raw,
    table: Table,
    warning: Warning,
    marker: Marker
  },
  data: mockData
});

let btnConvert = document.getElementById("btnConvert");
btnConvert.addEventListener("click", () => {
  editor.save().then((outputData) => {
    let result = editorJsParser(outputData.blocks);
    console.log(result);
  });
});
```
<br/>

# Install supported tools

`npm i --save @editorjs/checklist`

`npm i --save @editorjs/code`

`npm i --save @editorjs/header`

`npm i --save @editorjs/list`

`npm i --save @editorjs/embed`

`npm i --save @editorjs/delimiter`

`npm i --save @editorjs/marker`

`npm i --save @editorjs/marker`

`npm i --save @editorjs/image`

`npm i --save @editorjs/raw`

`npm i --save @editorjs/table`

`npm i --save @editorjs/warning`