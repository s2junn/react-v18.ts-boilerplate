import * as React from 'react';
import { useState, useEffect } from 'react';

import './about.scss';

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
    <div className={`about ${props.classNames || ''}`}>
      { message }
      { props.children }
    </div>
  );
};

About.defaultProps = {};

export default React.memo( About );