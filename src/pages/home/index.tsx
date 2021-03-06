import * as React from 'react';
import { useState, useEffect } from 'react';

import './home.scss';

type HomeProps = {
  children?: React.ReactNode;
  classNames?: string;
}

function Home ( props: HomeProps = {} ) {
  const [message, setMessage] = useState( 'Hello, Home!' );
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
    <div className={`home ${props.classNames || ''}`}>
      { message }
      { props.children }
    </div>
  );
};

Home.defaultProps = {};

export default React.memo( Home );