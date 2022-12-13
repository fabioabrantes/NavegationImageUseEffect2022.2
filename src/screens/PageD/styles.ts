import styled from 'styled-components/native';

interface IPropsContainer{
  background?:string;
}
export const Container = styled.View<IPropsContainer>`
  flex: 1;
  background-color: ${(props)=>props.background? props.background : "#fff"};
`;
export const Header = styled.View`
 flex-direction:column;
 justify-content:flex-end;
 align-items:flex-end;
`;

export const ButtonBack = styled.Button``;
export const ButtonMove = styled.Button``;
