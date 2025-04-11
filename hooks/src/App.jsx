import { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useControls, button } from 'leva';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
//import * as THREE from 'three';

const Cube = (props) => {
	const [color, setColor] = useState('white');

	const material = useMemo(
		() => <meshStandardMaterial color={color} />,
		[color]
	);
	useControls({
		changeColortoRed: button(() => setColor('red')),
		changeColortoBlue: button(() => setColor('blue')),
		changeColortoGreen: button(() => setColor('green')),
	});

	return (
		<mesh {...props}>
			<boxGeometry />
			{material}
		</mesh>
	);
};

function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
				<OrbitControls />
				<Cube rotation-y={Math.PI / 4} />
				<ContactShadows
					position-y={-2}
					opacity={0.5}
					blur={2}
					color={'pink'}
					scale={10}
				/>
				<Environment preset='city' />
			</Canvas>
		</>
	);
}

export default App;
