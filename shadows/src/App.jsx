import { Canvas } from '@react-three/fiber';
import {
	AccumulativeShadows,
	ContactShadows,
	OrbitControls,
	OrthographicCamera,
	RandomizedLight,
	SoftShadows,
	useHelper,
} from '@react-three/drei';
import { useRef } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

export default function App() {
	const { cubeInAir } = useControls({
		cubeInAir: false,
	});
	return (
		<>
			<Canvas
				camera={{ position: [0, 3, 3] }}
				shadows
			>
				<AccumulativeShadows
					temporal
					frames={35}
					alphaTest={0.85}
					scale={5}
					position={[0, -0.499, 0]}
					color={'#efbd4e'}
				>
					<RandomizedLight
						amount={4}
						radius={9}
						intensity={0.55}
						ambient={0.25}
						position={[5, 5, -10]}
					/>
					<RandomizedLight
						amount={4}
						radius={9}
						intensity={0.25}
						ambient={0.55}
						position={[-5, 5, -9]}
					/>
				</AccumulativeShadows>
				{/* <SoftShadows /> */}
				{/* <ContactShadows
					position-y={-0.49}
					opacity={0.5}
					blur={2}
					color={'pink'}
					scale={10}
				/> */}
				<OrbitControls />
				<ambientLight intensity={0.5} />
				<directionalLight
					position={[5, 5, 5]}
					intensity={0.5}
					castShadow
					//shadow-mapSize={[2048, 2048]}
					// shadow-camera-far={20}
					// shadow-camera-left={10}
					// shadow-camera-right={-10}
					// shadow-camera-top={-10}
					// shadow-camera-bottom={10}
				></directionalLight>
				<directionalLight
					position={[-5, 5, 5]}
					intensity={0.5}
					color={'red'}
					castShadow
				/>

				<mesh
					position={[1, 1.4, 1]}
					castShadow
				>
					<sphereGeometry args={[0.5, 32, 32]} />
					<meshStandardMaterial color={'white'} />
				</mesh>
				<mesh
					rotation-y={Math.PI / 4}
					position-y={cubeInAir ? 1.5 : 1}
					castShadow
					receiveShadow
				>
					<boxGeometry />
					<meshStandardMaterial color={'white'} />
				</mesh>

				{/* <mesh
					rotation-x={-Math.PI / 2}
					position-y={0.5}
					receiveShadow
				>
					<planeGeometry args={[5, 5]} />
					<meshStandardMaterial color={'white'} />
				</mesh> */}

				{/* <group position={5}>
					<mesh
						position={[1, 2, 1]}
						castShadow
					>
						<sphereGeometry args={[0.5, 32, 32]} />
						<meshStandardMaterial color={'white'} />
					</mesh>
					<mesh
						rotation-y={Math.PI / 4}
						position-y={1}
						castShadow
						receiveShadow
					>
						<boxGeometry />
						<meshStandardMaterial color={'white'} />
					</mesh>

					<mesh
						rotation-x={-Math.PI / 2}
						position-y={0.5}
						receiveShadow
					>
						<planeGeometry args={[5, 5]} />
						<meshStandardMaterial color={'white'} />
					</mesh>
				</group> */}
			</Canvas>
		</>
	);
}
