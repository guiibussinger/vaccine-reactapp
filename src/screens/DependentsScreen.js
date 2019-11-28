import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';
import { NavigationEvents } from 'react-navigation';

import Label from '../components/Label';
import DependentCard from '../components/DependentCard';

const HomeScreen = () => {
  const [dependents, setDependents] = useState([]);

  const getDependents = () => {
    return fetch('http://localhost:8000/api/person', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
      .then(response => response.json())
      .then(responseJson => setDependents(responseJson));
  };

  return (
    <StyledHome>
      <StyledScroll>
        <StyledScrollTitleRow>
          <View style={{ flexDirection: 'row' }}>
            <Label fontSize={24} marginRight={10}>
              Dependentes
            </Label>
            <Icon name="people" size={30} color="#545454" />
          </View>
        </StyledScrollTitleRow>
        {dependents.map((item, index) => (
          <DependentCard key={index} item={item} />
        ))}
      </StyledScroll>
      <NavigationEvents onDidFocus={() => getDependents()} />
    </StyledHome>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Dependentes',
  headerRight: () => (
    <StyledHeaderButton onPress={() => navigation.navigate('NewDependent')}>
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
