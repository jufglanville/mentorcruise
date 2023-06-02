import React from 'react';
import styled from 'styled-components';
import { UnionType } from '../types';
import Input from './Input';
import TipAmountContainer from './TipAmountContainer';

interface Props {
  data: UnionType[];
  onChange: (id: string, value: string | number) => void;
}

const componentMapping: { [key: string]: React.ComponentType<any> } = {
  Input,
  TipAmountContainer,
};

const TipInputContainer = ({ data, onChange }: Props) => {
  return (
    <InputContainer>
      {data.map((item) => {
        const Component = componentMapping[item.type];
        return <Component key={item.id} {...item} onChange={onChange} />;
      })}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;
`;

export default TipInputContainer;
