import styled from 'styled-components/native';

interface IPropsContainer{
  background?:string;
}
export const Container = styled.View<IPropsContainer>`
  flex: 1;
  background-color: ${(props)=>props.background? props.background : "#fff"};
`;

