
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Input Component

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

/**
 *  Input Component
 */
class InputComponent extends Component {

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        helperText: PropTypes.string,
        required: PropTypes.bool,
        value: PropTypes.string
    };

    static defaultProps () {
        return {
            id: _.uniqueId('input')
        };
    }

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    _renderLabel () {
        return this.props.label
            ? <label htmlFor={this.props.id}>{this.props.label}</label>
            : null;
    }

    _renderField () {
        return <input {..._.omit(this.props, ['label'])}/>;
    }

    _renderHelperText () {
        return this.props.helperText
            ? <div className="helper-text">{this.props.helperText}</div>
            : null;
    }

    render () {
        const classNames = ClassNames(
            'input-group',
            {
                'is-required': this.props.required,
                'is-filled': this.props.value
            }
        );

        return (
            <div className={classNames}>
                {this._renderLabel()}
                {this._renderField()}
                {this._renderHelperText()}
            </div>
        );
    }

}

// Export Input Component
export default InputComponent;
