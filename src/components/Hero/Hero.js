import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem-vindo ao <br />
        Meu Portfólio Pessoal
      </SectionTitle>
      <SectionText>
        Bacharel em Ciências da Computação pela Universidade Federal de Uberlândia. <br />
        Cursando Pós em Big Data e Projetos de Cloud Computing. <br />
        Desenvolvedor Fullstack na Landix Sistemas.
      </SectionText>
      {/* <Button onClick={() => window.location = "https://google.com"}>Aprenda Mais</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;