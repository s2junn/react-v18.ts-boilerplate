import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import './{{kebab name}}.scss';

type RootProps = {
	children?: React.ReactNode;
	classNames?: string;
};

function Root(props: RootProps = {}) {
	const [message, setMessage] = useState('Hello, Root!');
	const [variable, setVariable] = useState('Test Variable');

	const navigate = useNavigate()

	useEffect(() => {
		//TODO: componentDidMount
		return () => {
			//TODO: componentWillUnmount
		};
	}, []);

	useEffect(() => {
		//TODO: shouldComponent Update? componentDidUpdate? 둘 중에 하나
		return () => {
			//TODO: componentWillUpdate
		};
	}, [variable]);

	function handleEvents(e: React.MouseEvent<HTMLButtonElement>) {
		switch(e.target.value) {
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
		<div className={`root-element ${props.classNames || ''}`}>
			{message}
			{props.children}
			<button value="root" onClick={handleEvents}>root</button>
			<button value="home" onClick={handleEvents}>home</button>
			<button value="about" onClick={handleEvents}>about</button>
		</div>
	);
}

Root.defaultProps = {};

// export default React.memo(Root);
export default Root;
