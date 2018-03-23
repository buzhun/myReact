import React from 'react';
import PropTypes from 'prop-types';
const Button = function (props) {
    const {kind, ...rest} = props;
    return <button className={kind} {...rest}>{props.children}</button>;
} 
export default Button;
Button.propTypes = {
    kind: PropTypes.string
}