import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {
  return ReactDOM.createPortal(
    <div className='App-header'>
      <p>Je suis dans le root()</p>
    </div>,
    document.getElementById('second-root')
  );
}

export default MyComponent;
