import React from 'react';
import styled from 'styled-components/native';

const Label = ({ children, ...props }) => <StyledLabel {...props}>{children}</StyledLabel>;

const StyledLabel = styled.Text`
  font-size: ${({ fontSize }) => fontSize || 14};
  color: ${({ color }) => color || 'black'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
  border-bottom-width: ${({ borderBottomWidth }) => borderBottomWidth || 0};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor || 'transparent'};
  padding-top: ${({ paddingTop }) => paddingTop || 0};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0};
  padding-left: ${({ paddingLeft }) => paddingLeft || 0};
  padding-right: ${({ paddingRight }) => paddingRight || 0};
`;

export default Label;
