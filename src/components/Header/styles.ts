import styled from 'styled-components/native';

interface IPropsContainer{
  back?:boolean;
  move?:boolean;
}
export const Container = styled.View<IPropsContainer>`
  flex-direction:row;
  justify-content: ${props => (!props.back || !props.move) ? 'center' : 'space-between'};
  align-items:center;

  margin:50px 20px;
`;

export const ButtonBack = styled.Button`
  font-weight:bold;
`;
export const ButtonMove = styled.Button`
  background-color:green;
  font-weight:bold;
`;
