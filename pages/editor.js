import React from 'react'
import Header from '../components/global/header'
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";


class App extends React.Component {
    state = {
        text: ''
    }
    setText = (value) => {
        console.log('Content was updated:', value);
    }

    render() {
        return (
            <div id="wrapper">
                <Header />
                <SimpleMDE
                    id='editor'
                    value={this.state.text}
                    onChange={this.setText}
                    options={{
                        renderingConfig : {
                            codeSyntaxHighlighting : true
                        },
                        previewRender: function(plainText, preview) {
                            setTimeout(function() {
                                preview.innerHTML = this.parent.markdown(plainText);
                                Prism.highlightAll();
                            }.bind(this), 1)
                            return "Loading..."
                        },
                        toolbar: [
                        "bold", "italic", "heading", "|", "quote", "fullscreen", "preview", "side-by-side",
                        {
                            name: "custom",
                            action: function customFunction(editor){
                                // Add your own code
                            },
                            className: "fa fa-star",
                            title: "Custom Button",
                        },
                    ],
                    }}
                />
            </div>
        );
    }
}

export default App;
