import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-ionicons';
import { maskJs } from 'mask-js';
import moment from 'moment';

import Label from '../components/Label';
import StyledInput from '../components/StyledInput';

const NewVaccine = ({ navigation }) => {
  const vaccineToEdit = navigation.getParam('vaccine', null);

  const [vaccine, setVaccine] = useState({
    name: vaccineToEdit ? vaccineToEdit.name : '',
    date: vaccineToEdit ? moment(vaccineToEdit.date).format('YY-MM-YYYY') : '',
    dosage: vaccineToEdit ? vaccineToEdit.dosage : ''
  });

  const setValue = (field, value) => {
    setVaccine({
      ...vaccine,
      [field]: value
    });
  };

  const onCreate = () => {
    const { name, date, dosage } = vaccine;
    if (!name || !date || !dosage) return alert('Preencha todos os campos!');
    if (!vaccineToEdit)
      return fetch('http://localhost:8000/api/vaccine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
          ...vaccine,
          date: new Date(date.substring(6), date.substring(3, 5), date.substring(0, 2))
        })
      }).then(() => navigation.pop());

    return fetch('http://localhost:8000/api/vaccine', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        ...vaccine,
        date: new Date(date.substring(6), date.substring(3, 5), date.substring(0, 2)),
        id: vaccineToEdit._id
      })
    }).then(() => navigation.pop());
  };

  const onDelete = () => {
    return fetch(`http://localhost:8000/api/vaccine?id=${vaccineToEdit._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }).then(() => navigation.pop());
  };

  const { name, date, dosage } = vaccine;
  return (
    <StyledHome>
      <StyledInput title="Nome da vacina" value={name} onChange={text => setValue('name', text)} />
      <StyledInput title="Data" value={maskJs('99-99-9999', date)} onChange={text => setValue('date', text)} />
      <StyledInput title="Dosagem" value={maskJs('999', dosage)} onChange={text => setValue('dosage', text)} />
      <StyledButton onPress={onCreate}>
        <Label color="white">Salvar</Label>
      </StyledButton>
      {vaccineToEdit && (
        <StyledButtonDelete onPress={onDelete}>
          <Label color="white">Deletar</Label>
        </StyledButtonDelete>
      )}
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

const StyledButtonDelete = styled.TouchableOpacity`
  width: 60%;
  height: 60;
  align-items: center;
  justify-content: center;
  margin-top: 15;
  border-radius: 10;
  background-color: #f05454;
`;

export default NewVaccine;
