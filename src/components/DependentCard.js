import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import Label from '../components/Label';

const DependentCard = ({ item: { name, birth, document } }) => (
  <StyledCard
    style={{
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 15
      },
      shadowOpacity: 0.1,
      shadowRadius: 40.0,

      elevation: 24,
      zIndex: 24
    }}
  >
    <Label fontSize={24} fontWeight="600">
      {name}
    </Label>
    <Label fontSize={16}>{moment(birth).format('DD/MM/YYYY')}</Label>
    <Label fontSize={16}>{document}</Label>
  </StyledCard>
);

const StyledCard = styled.TouchableOpacity`
  flex: 1;
  height: 110;
  justify-content: space-evenly;
  margin-right: 20;
  margin-bottom: 15;
  margin-left: 20;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  border-radius: 10;
  background-color: white;
`;

export default DependentCard;
