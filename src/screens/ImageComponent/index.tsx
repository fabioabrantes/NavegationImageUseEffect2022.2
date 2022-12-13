import React, {useState} from 'react';

import Logo from '../../assets/zumbi.svg';
import Logo2 from '../../assets/logoIFPB.png';

import {Container,Title,ImageSample,LoadImage} from './styles';

export function ImageComponent(){
  const [status, setStatus] = useState('');

  return (
    <Container>
      
      <Title>{"Logomarca do Zumbi"}</Title>
      <Logo width={120} height={120} />

      <ImageSample
        source={Logo2}
        resizeMode="center"
      />

      <ImageSample
        source={{uri: 'https://github.com/fabioabrantes.png'}}
        resizeMode="contain"
        defaultSource={require('../../assets/placeholder.png')}
        onLoadStart={() => {
          setStatus('carregando');
        }}
        onLoad={() => setStatus('carregou!')}
      />
      <LoadImage>{status}</LoadImage>     
      
    </Container>
  );
};
