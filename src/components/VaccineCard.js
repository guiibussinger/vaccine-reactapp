import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import Label from '../components/Label';

const VaccineCard = () => (
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
    <Label textSize={24} fontWeight="600">
      Febre Amarela
    </Label>
    <Label textSize={20}>{moment().format('DD/MM/YY')}</Label>
    <Label textSize={24}>Febre Amarela</Label>
  </StyledCard>
);

const StyledCard = styled.TouchableOpacity`
  height: 110;
  flex: 1;
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

export default VaccineCard;
