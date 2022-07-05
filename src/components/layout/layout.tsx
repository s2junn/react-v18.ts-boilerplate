import * as React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import './layout.scss';

type LayoutProps = {
  children?: React.ReactNode;
  classNames?: string;
}

function Layout ( props: LayoutProps = {} ) {
  const [message, setMessage] = useState( 'Hello, Layout!' );
  const [variable, setVariable] = useState('Test Variable');

  useEffect( () => {
    //TODO: componentDidMount
    console.log('props.children = ', props.children)

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

  function handleEvents() {
    //TODO: to do something
  }

  return (
    <div className={`layout ${props.classNames || ''}`}>
      { message }
      <Outlet />
    </div>
  );
};

Layout.defaultProps = {};

export default React.memo( Layout );