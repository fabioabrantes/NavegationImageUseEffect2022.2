import { Container,ButtonBack,ButtonMove } from './styles';

interface IProps {
  onBack?:()=>void;
  onMove?:()=>void;
}

export function Header({onBack,onMove}:IProps) {
  
  
  return (
    <Container back={!!onBack} move={!!onMove}>
          {onBack && (
            <ButtonBack
              title="voltar"
              onPress={onBack}
            />
          )}
          
          {onMove && (
            <ButtonMove
              title="Avançar"
              onPress={onMove}
            />
          )}
    </Container>
  );
}