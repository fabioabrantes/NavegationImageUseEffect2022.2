import React from 'react';
import { Container,NamePage } from './styles';

interface IProps{
  nameScreen:string |number;
}
export function Content({nameScreen}:IProps) {
  return (
    <Container>
      <NamePage>{nameScreen}</NamePage>
    </Container>
  );
}