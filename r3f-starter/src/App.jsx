import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';
import './App.css';

export default function App() {
	return (
		<Canvas>
			<axesHelper />
			<Grid
				sectionSize={3}
				sectionColor={'purple'}
				sectionThickness={1}
				cellSize={1}
				cellColor={'#6f6f6f'}
				cellThickness={0.6}
				infiniteGrid
				fadeDistance={50}
				fadeStrength={5}
			/>

			<OrbitControls />
			<mesh rotation={THREE.MathUtils.degToRad(30)}>
				<boxGeometry args={[3, 3, 3]} />
				{/* <meshStandardMaterial side={THREE.FrontSide} /> */}
				<meshBasicMaterial
					color={'orange'}
					transparent
					opacity={0}
				/>
			</mesh>
			<ambientLight intensity={0.5} />
			<directionalLight
				intensity={0.5}
				position={[5, 5, 5]}
			/>
			<directionalLight
				intensity={0.5}
				position={[-5, -5, -5]}
			/>
		</Canvas>
	);
}
