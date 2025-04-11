import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useControls } from 'leva';

const Lights = () => {
	const ref = useRef();

	useHelper(ref, THREE.SpotLightHelper, 'red');

	const { distance, color, attenuation, angle, anglePower, intensity } =
		useControls({
			color: '#ff0000',
			intensity: 0.5,
			attenuation: 2.2,
			distance: 6,
			angle: 1,
			anglePower: 1,
		});

	// useHelper(ref, THREE.PointLightHelper, 0.5, 'red');

	// const { color, intensity, distance, decay } = useControls({
	// 	color: '#ff0000',
	// 	intensity: 0.5,
	// 	distance: 5,
	// 	decay: 3,
	// });

	return (
		// <pointLight
		// 	ref={ref}
		// 	position={[1, 1, 0]}
		// 	intensity={intensity}
		// 	distance={distance}
		// 	decay={decay}
		// 	color={color}
		// />

		// <hemisphereLight
		// 	intensity={0.5}
		// 	color={'sky'}
		// 	groundColor={'green'}
		// />

		<spotLight
			ref={ref}
			position={[1, 1, 0]}
			color={color}
			attenuation={attenuation}
			angle={angle}
			anglePower={anglePower}
			distance={distance}
			intensity={intensity}
		/>
	);
};

export default function App() {
	return (
		<Canvas camera={{ position: [0, 3, 3] }}>
			<OrbitControls />
			<axesHelper />
			<Grid
				sectionSize={0.5}
				sectionColor={'#000000'}
				sectionThickness={1}
				cellSize={2}
				cellColor={'#000000'}
				cellThickness={0.5}
				infiniteGrid
				fadeDistance={50}
				fadeStrength={10}
			/>
			{/* <ambientLight
				intensity={0.5}
				color={'royalblue'}
			/>
			<directionalLight
				intensity={0.5}
				position={[3, 3, 3]}
				color={'red'}
			/>
			<directionalLight
				intensity={0.5}
				position={[0, 3, -3]}
				color={'green'}
			/>
			<directionalLight
				intensity={0.5}
				position={[-3, 3, 3]}
				color={'blue'}
			/> */}

			{/* point light */}
			<Lights />

			<mesh
				rotation-y={Math.PI / 2}
				position={[0, 0.1, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial
					color={'white'}
					roughness={1}
					metalness={0}
				/>
			</mesh>

			<mesh
				rotation-x={-Math.PI / 2}
				position-y={-0.5}
			>
				<planeGeometry args={[5, 5]} />
				{/* <meshStandardMaterial
					color={'white'}
					roughness={0.3}
					metalness={0.05}
				/> */}
				<meshPhysicalMaterial
					clearCoat={1}
					color={'white'}
				/>
			</mesh>
		</Canvas>
	);
}
