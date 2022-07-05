import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './about.scss';

type AboutProps = {
  children?: React.ReactNode;
  classNames?: string;
}

function About ( props: AboutProps = {} ) {
  const [message, setMessage] = useState( 'Hello, About!' );
  const [variable, setVariable] = useState('Test Variable');

  const navigate = useNavigate()

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

  function handleEvents(e: React.MouseEvent<HTMLButtonElement>) {
		switch(e.target.value) {
      case 'root':
				navigate('/')
				break;
			case 'home':
				navigate('/home')
				break;
			case 'about':
				navigate('/about')
				break;
			default:
		}
	}

  return (
    <div className={`about ${props.classNames || ''}`}>
      { message }
      { props.children }
      <button value="root" onClick={handleEvents}>root</button>
			<button value="home" onClick={handleEvents}>home</button>
			<button value="about" onClick={handleEvents}>about</button>
    </div>
  );
};

About.defaultProps = {};

export default React.memo( About );