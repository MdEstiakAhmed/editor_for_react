import React from 'react';
import $ from 'jquery'
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// import 'react-summernote/lang/summernote-ru-RU.js'; // you can import any other locale
// Import bootstrap(v3 or v4) dependencies
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/tooltip';

const HelloButton = function (context) {
  let ui = $.summernote.ui;
  let button = ui.button({
    contents: '<button class="btn btn-primary">click me!!!</button>',
    tooltip: 'hello',
    click: function () {
      context.invoke('editor.insertText', 'hello world ');
    }
  });

  return button.render();
}

const RichTextEditor = () => {
  const onChange = (content) => {
    console.log('onChange', content);
  }

  return (
    <div className="custom-container">
            <ReactSummernote
              value="Default value"
              options={{
                lang: 'ru-RU',
                height: 350,
                dialogsInBody: true,
                toolbar: [
                  ['style', ['style']],
                  ['font', ['bold', 'underline', 'italic',  'clear']],
                  ['fontname', ['fontname']],
                  ['para', ['ul', 'ol', 'paragraph']],
                  ['table', ['table']],
                  ['insert', ['link', 'picture', 'video']],
                  ['view', ['fullscreen', 'codeview']],
                  ['mybutton', ['hello']]
                ],
                buttons: {
                  hello: HelloButton
                },
                styleTags: [
                  'p',
                      { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
                      'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
                ],
                lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
                placeholder: 'write here...',
                spellCheck: true,
                
              }}
              onChange={onChange}
            />
        </div>
  );
};

export default RichTextEditor;