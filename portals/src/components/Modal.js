import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.popUpContainer = document.createElement('div');
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount = () => {
    document.body.removeChild(this.popUpContainer);
  };

  render() {
    return ReactDOM.createPortal(
      <div className='modal' onClick={this.props.onClose}>
        <div>
          <button className='button-modal'>X</button>
          <p>
            <h4>Un titre de Modal</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            laborum sapiente. Delectus perferendis illum mollitia magnam nobis
            voluptatem repudiandae ab tenetur a aspernatur officia alias
            ratione, quaerat laboriosam consequuntur illo. Soluta similique
            porro, nam, sunt qui non necessitatibus provident ea accusantium
            sed, delectus obcaecati veniam?
          </p>
        </div>
      </div>,
      this.popUpContainer
    );
  }
}

export default Modal;
