import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';
import { NavigationEvents } from 'react-navigation';

import Label from '../components/Label';
import VaccineCard from '../components/VaccineCard';

const HomeScreen = () => {
  const [vaccineList, setVaccineList] = useState([]);

  const getVaccines = () => {
    return fetch('http://localhost:8000/api/vaccine', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
      .then(response => response.json())
      .then(responseJson => setVaccineList(responseJson));
  };

  return (
    <StyledHome>
      <StyledScroll>
        <StyledScrollTitleRow>
          <View style={{ flexDirection: 'row' }}>
            <Label fontSize={24} marginRight={10}>
              Últimas vacinas
            </Label>
            <Icon name="water" size={30} color="#f05454" />
          </View>
          {/* <TouchableOpacity>
          <Label>Ver Todas</Label>
        </TouchableOpacity> */}
        </StyledScrollTitleRow>
        {vaccineList.map((item, index) => (
          <VaccineCard key={index} item={item} />
        ))}
      </StyledScroll>
      <NavigationEvents onDidFocus={() => getVaccines()} />
    </StyledHome>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Cartão de Vacinas',
  headerRight: () => (
    <StyledHeaderButton onPress={() => navigation.navigate('NewVaccine')}>
      <Icon name="add" size={40} />
    </StyledHeaderButton>
  ),
  headerLeft: () => (
    <StyledHeaderButtonLeft onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" size={35} />
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

const StyledHeaderButton = styled.TouchableOpacity`
  margin-right: 10;
  margin-bottom: 10;
`;

const StyledHeaderButtonLeft = styled.TouchableOpacity`
  margin-left: 10;
`;

const StyledScroll = styled.ScrollView`
  flex: 1;
`;

const StyledScrollTitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10;
  margin-bottom: 15;
  padding-right: 15;
  padding-left: 15;
`;

export default HomeScreen;
