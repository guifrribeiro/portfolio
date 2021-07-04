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
        Texto em desenvolvimento
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Aprenda Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;