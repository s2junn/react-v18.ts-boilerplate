import * as React from 'react';
import { useState, useEffect } from 'react';

import styled from '@emotion/styled'

type AboutProps = {
  children?: React.ReactNode;
  classNames?: string;
}

function About ( props: AboutProps = {} ) {
  const [message, setMessage] = useState( 'Hello, About!' );
  const [variable, setVariable] = useState('Test Variable');

  useEffect( () => {
    //TODO: componentDidMount
    return () => {
      //TODO: componentWillUnmount
    }
  }, []);

  useEffect( () => {
    //TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나 
    return () => {
      //TODO: componentWillUpdate
    }
  }, [ variable ]);

  return (
    <StyledAbout className={['about', props.classNames || ''].join(' ')}>
      { message }
      { props.children }
    </StyledAbout>
  );
};

About.defaultProps = {};

export default React.memo( About );

const StyledAbout = styled.div`
&.about {

}
`