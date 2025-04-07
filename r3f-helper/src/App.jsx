import { Canvas } from '@react-three/fiber';
import { Stats, Grid, useHelper, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';
import { useControls } from 'leva';
import './App.css';

const Box = () => {
	const ref = useRef();

	useHelper(ref, THREE.BoxHelper, 'hotpink');

	const { position, color, opacity, transparent } = useControls({
		position: {
			x: 0,
			y: 0,
			z: 0,
		},
		color: '#6f6f6f',
		opacity: {
			value: 0.5,
			min: 0,
			max: 1,
			step: 0.01,
		},
		transparent: true,
	});
	return (
		<mesh
			ref={ref}
			position={[position.x, position.y, position.z]}
		>
			<boxGeometry />
			<meshBasicMaterial
				color={color}
				transparent={transparent}
				opacity={opacity}
			/>
		</mesh>
	);
};

const App = () => {
	return (
		<Canvas camera={{ position: [3, 3, 3] }}>
			<Stats />
			<OrbitControls />
			<axesHelper />
			<Grid
				sectionSize={3}
				sectionColor={'purple'}
				sectionThickness={1}
				cellSize={1}
				cellColor={'#6f6f6f'}
				cellThickness={0.6}
				fadeDistance={50}
				fadeStrength={5}
				infiniteGrid
			/>
			<Box />
		</Canvas>
	);
};

export default App;
