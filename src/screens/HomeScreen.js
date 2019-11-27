import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';

import Label from '../components/Label';
import VaccineCard from '../components/VaccineCard';

const HomeScreen = () => (
  <StyledHome>
    <StyledScroll>
      <StyledScrollTitleRow>
        <View style={{ flexDirection: 'row' }}>
          <Label fontSize={24} marginRight={10}>
            Últimas vacinas
          </Label>
          <Icon name="water" size={30} color={'#f05454'} />
        </View>
        <TouchableOpacity>
          <Label>Ver Todas</Label>
        </TouchableOpacity>
      </StyledScrollTitleRow>
      <VaccineCard />
      <VaccineCard />
      <VaccineCard />
    </StyledScroll>
  </StyledHome>
);

HomeScreen.navigationOptions = {
  title: 'Cartão de Vacinas',
  headerRight: () => (
    <StyledHeaderButton>
      <Icon name="add" size={40} />
    </StyledHeaderButton>
  )
};

const StyledHome = styled.View`
  flex: 1;
  background-color: white;
`;

const StyledHeaderButton = styled.TouchableOpacity`
  margin-right: 10;
  margin-bottom: 10;
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
