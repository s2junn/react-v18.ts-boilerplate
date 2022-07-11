import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
		// navigate('/home')

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

	return (
		<div className={`root-element ${props.classNames || ''}`}>
			{message}<br />
			{props.children}
		</div>
	);
}

Root.defaultProps = {};

// export default React.memo(Root);
export default Root;
