import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Avatar(props: any) {
    const { nodes, materials }: any = useGLTF("/avatar-transformed.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={5.3}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        geometry={nodes.Object_4.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        geometry={nodes.Object_6.geometry}
                        material={materials.Material}
                        position={[0.13, 0.19, -0.81]}
                    />
                    <mesh
                        geometry={nodes.Object_8.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        geometry={nodes.Object_10.geometry}
                        material={materials.Material}
                        position={[0.13, 0.19, -0.81]}
                    />
                    <mesh
                        geometry={nodes.Object_12.geometry}
                        material={materials.Material}
                        position={[0.02, -0.12, -0.42]}
                    />
                    <mesh
                        geometry={nodes.Object_14.geometry}
                        material={materials.Material}
                        position={[0.02, -0.08, -0.42]}
                    />
                    <mesh
                        geometry={nodes.Object_16.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        geometry={nodes.Object_18.geometry}
                        material={materials.Material}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/avatar-transformed.glb");
