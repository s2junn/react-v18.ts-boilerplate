import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.scss';

type HomeProps = {
  children?: React.ReactNode;
  classNames?: string;
}

function Home ( props: HomeProps = {} ) {
  const [message, setMessage] = useState( 'Hello, Home!' );
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
    <div className={`home ${props.classNames || ''}`}>
      { message }
      { props.children }
      <button value="root" onClick={handleEvents}>root</button>
			<button value="home" onClick={handleEvents}>home</button>
			<button value="about" onClick={handleEvents}>about</button>
    </div>
  );
};

Home.defaultProps = {};

export default React.memo( Home );