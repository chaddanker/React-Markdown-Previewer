import React from 'react';

import Editor from './Editor';
import Preview from './Preview';

export default () => {
    return (
        <div className="container-md mx-auto" style={{ paddingTop: '20px' }}>
            <h1 className="mx-auto" style={{ width: 400 }}>Markdown Previewer</h1>
            <hr />
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-sm">
                    <Editor className="editor" />
                </div>
                <div className="col-sm">
                    <Preview className="preview" />
                </div>
            </div>
        </div>
    );
};

