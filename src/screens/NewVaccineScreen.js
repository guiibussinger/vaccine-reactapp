import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import { maskJs } from 'mask-js';

import Label from '../components/Label';
import StyledInput from '../components/StyledInput';

const NewVaccine = () => {
  const [vaccine, setVaccine] = useState({
    name: '',
    date: '',
    dosage: ''
  });

  const setValue = (field, value) => {
    setVaccine({
      ...vaccine,
      [field]: value
    });
  };
  const { name, date, dosage } = vaccine;
  return (
    <StyledHome>
      <StyledInput title="Nome da vacina" value={name} onChange={text => setValue('name', text)} />
      <StyledInput title="Data" value={maskJs('99-99-99', date)} onChange={text => setValue('date', text)} />
      <StyledInput title="Dosagem" value={dosage} onChange={text => setValue('dosage', text)} />
      <StyledButton>
        <Label color="white">Salvar</Label>
      </StyledButton>
    </StyledHome>
  );
};

NewVaccine.navigationOptions = ({ navigation }) => ({
  title: 'Adicionar Vacina',
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

export default NewVaccine;
