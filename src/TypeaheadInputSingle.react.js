import cx from 'classnames';
import React from 'react';

import hintContainer from './containers/hintContainer';

class TypeaheadInputSingle extends React.Component {
  render() {
    const { className, inputRef, ...props } = this.props;

    return (
      <input
        {...props}
        className={cx('form-control', 'rbt-input', 'rbt-input-main', className)}
        ref={inputRef}
        type="text"
      />
    );
  }
}

export default hintContainer(TypeaheadInputSingle);
