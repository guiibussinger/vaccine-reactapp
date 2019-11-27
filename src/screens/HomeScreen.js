import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';

import Label from '../components/Label';

const HomeScreen = () => (
  <StyledHome>
    <StyledScroll>
      <StyledScrollTitleRow>
        <Label fontSize={24} marginTop={10}>
          Últimas vacinas
        </Label>
        <TouchableOpacity>
          <Label marginTop={10}>Ver Todas</Label>
        </TouchableOpacity>
      </StyledScrollTitleRow>
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
  padding-right: 15;
  padding-left: 15;
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
`;

export default HomeScreen;
