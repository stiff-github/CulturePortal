import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/Colors';
import { Buttons } from '../../components/style/buttons/Buttons';
import { CheckBoxs } from '../../components/style/checkBox/CheckBox';
import { Typography } from '../../components/style/typography/Typography';
import { Inputs } from '../../components/style/inputs/Inputs';
import { Tables } from '../../components/style/tables/Tables';
import './StyleGuide.scss';

import Wrapper from '../../components/style/wrapper/Wrapper';


const StylePage = (): JSX.Element => {
  return (
    <Container className="page-styleGuide">
      <h2 className="mt-3 text-center">Our styleGuide</h2>
        <Wrapper title="Button" codeExample="<></>">
          <Buttons />
        </Wrapper>
        <Wrapper title="CheckBox" codeExample="<></>">
          <CheckBoxs />
        </Wrapper>
        <Wrapper title="Color" codeExample="<></>">
          <Colors />
        </Wrapper>
        <Wrapper title="Button" codeExample="<></>">
          <Typography />
        </Wrapper>
        <Wrapper title="Inputs" codeExample="<></>">
          <Inputs />
        </Wrapper>
        <Wrapper title="Inputs" codeExample="<></>">
          <Tables />
        </Wrapper>
    </Container>
  );
};

export default StylePage;
