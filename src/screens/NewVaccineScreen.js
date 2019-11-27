import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';

import Label from '../components/Label';

const NewVaccine = () => (
  <StyledHome>
    <Label fontSize={24} marginRight={10}>
      Add Vacina
    </Label>
  </StyledHome>
);

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
  background-color: white;
`;

const StyledHeaderButtonLeft = styled.TouchableOpacity`
  margin-left: 10;
`;

export default NewVaccine;
