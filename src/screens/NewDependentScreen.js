import React, { useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';
import { maskJs } from 'mask-js';

import Label from '../components/Label';
import StyledInput from '../components/StyledInput';

const NewDependent = ({ navigation }) => {
  const [dependent, setDependent] = useState({
    name: '',
    birth: '',
    document: ''
  });

  const setValue = (field, value) => {
    setDependent({
      ...dependent,
      [field]: value
    });
  };

  const onCreate = () => {
    const { name, birth, document } = dependent;
    if (!name || !birth || !document) return alert('Preencha todos os campos!');
    return fetch('http://localhost:8000/api/person', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        ...dependent,
        birth: new Date(birth.substring(6), birth.substring(3, 5), birth.substring(0, 2))
      })
    }).then(() => navigation.pop());
  };

  const { name, birth, document } = dependent;

  return (
    <StyledHome>
      <StyledInput title="Nome do dependente" value={name} onChange={text => setValue('name', text)} />
      <StyledInput title="Nascimento" value={maskJs('99-99-9999', birth)} onChange={text => setValue('birth', text)} />
      <StyledInput
        title="Documento (CPF)"
        value={maskJs('999.999.999-99', document)}
        onChange={text => setValue('document', text)}
      />
      <StyledButton onPress={onCreate}>
        <Label color="white">Salvar</Label>
      </StyledButton>
    </StyledHome>
  );
};

NewDependent.navigationOptions = ({ navigation }) => ({
  title: 'Novo Dependente',
  headerLeft: () => (
    <StyledHeaderButtonLeft onPress={() => navigation.pop()}>
      <Icon name="arrow-back" size={35} />
    </StyledHeaderButtonLeft>
  ),
  headerStyle: {
    backgroundColor: '#70a6ff'
  }
});

const StyledHome = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 15;
  padding-right: 15;
  padding-left: 15;
  background-color: white;
`;

const StyledHeaderButtonLeft = styled.TouchableOpacity`
  margin-left: 10;
`;

const StyledButton = styled.TouchableOpacity`
  width: 60%;
  height: 60;
  align-items: center;
  justify-content: center;
  border-radius: 10;
  background-color: #70a6ff;
`;

export default NewDependent;
