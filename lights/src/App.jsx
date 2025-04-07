import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 3, 3] }}>
				<OrbitControls />
				<pointLight
					position={[1, 1, 1]}
					intensity={0.5}
					distance={3}
					color={'white'}
				/>
				{/* <ambientLight intensity={0.2} />
				<directionalLight
					intensity={0.5}
					position={[5, 5, 5]}
					color={'red'}
				/>
				<directionalLight
					intensity={0.5}
					position={[0, 5, -5]}
					color={'green'}
				/>
				<directionalLight
					intensity={0.5}
					position={[-5, 5, 0]}
					color={'blue'}
				/> */}
				<mesh position-y={0.2}>
					<boxGeometry />
					<meshStandardMaterial color={'white'} />
				</mesh>

				<mesh
					rotation-x={-Math.PI / 2}
					position-y={-0.5}
				>
					<planeGeometry args={[5, 5]} />
					<meshStandardMaterial color={'white'} />
				</mesh>
			</Canvas>
		</>
	);
}
