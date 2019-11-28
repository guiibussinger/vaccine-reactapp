import React, { useState } from 'react';
import styled from 'styled-components/native';

import Label from '../components/Label';

const StyledInput = ({ title, value, onChange }) => {
  const [isTouched, setTouched] = useState(false);

  const color = isTouched ? '#70a6ff' : '#6f6f6f';
  return (
    <StyledContainer>
      <Label color={color} fontSize={16} marginBottom={5}>
        {title}
      </Label>
      <StyledInputText
        style={{ borderColor: color, color }}
        onChangeText={text => onChange(text)}
        value={value}
        onFocus={() => setTouched(true)}
        onBlur={() => setTouched(false)}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

const StyledInputText = styled.TextInput`
  height: 40;
  width: 100%;
  margin-bottom: 15;
  padding-left: 5;
  border-width: 1;
  border-radius: 5;
`;

export default StyledInput;
