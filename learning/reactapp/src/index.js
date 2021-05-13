import React from 'react';
import reactDom from 'react-dom';

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Heading">{new Date().toLocaleTimeString(this.props.locale)}</h1>
            </div>
        );
    }
}

reactDom.render(<Clock locale="bn-BD"> Hello World </Clock>, document.getElementById('root'));
