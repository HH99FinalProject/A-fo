import React from 'react';
import { Div, Text } from './index';
import styled from 'styled-components';

const Input = (props) => {
  const _ref = React.useRef(null);

  const {
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    borderRadius,
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    repeat,
    file,
    value,
    rows,
    is_submit,
    onSubmit,
    textarea,
  } = props;

  const styles = {
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    borderRadius,
  };
  if (multiLine) {
    return (
      <Div>
        <Text>{label}</Text>
        <Textarea
          {...styles}
          value={value}
          rows={rows}
          placeholder={placeholder}
          onChange={_onChange}
        ></Textarea>
      </Div>
    );
  }

  if (repeat) {
    return (
      <Div>
        <UserInput
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Div>
    );
  }

  if (file) {
    return (
      <React.Fragment>
        {label && (
          <Text float="left" width="100px">
            {label}
          </Text>
        )}
        {textarea ? (
          <Textarea
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
          />
        ) : (
          <InputDefault
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
          />
        )}
      </React.Fragment>
    );
  }

  return (
    <Div>
      {label && <Text>{label}</Text>}
      {is_submit ? (
        <CommentInput
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e);
            }
          }}
        />
      ) : (
        <InputDefault
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      )}
    </Div>
  );
};
Input.defaultProps = {
  width: '',
  height: '',
  lineHeight: '',
  margin: '',
  padding: '',
  border: '',
  borderRadius: '',
  multiLine: false,
  repeat: false,
  file: false,
  label: false,
  type: '',
  placeholder: '',
  value: '',
  rows: '',
  is_submit: false,
  textarea: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const InputDefault = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

const UserInput = styled.input`
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 5px 0px;
  :focus {
    outline: 2px solid lightgrey;
  }
`;

const Textarea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  resize: none;
`;

const CommentInput = styled.input`
  width: 1250px;
  padding: 10px;
  /* overflow: auto; */
  font-size: 16px;
`;

export default Input;
