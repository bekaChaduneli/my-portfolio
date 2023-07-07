import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MailBox(props: any) {
    const { nodes, materials }: any = useGLTF("/mailbox-transformed.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, -0.8]}>
                <mesh
                    geometry={nodes.Object_2.geometry}
                    material={materials["Scene_-_Root"]}
                />
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials["Scene_-_Root"]}
                />
                <mesh
                    geometry={nodes.Object_4.geometry}
                    material={materials["Scene_-_Root"]}
                />
                <mesh
                    geometry={nodes.Object_5.geometry}
                    material={materials["Scene_-_Root"]}
                />
                <mesh
                    geometry={nodes.Object_6.geometry}
                    material={materials["Scene_-_Root"]}
                />
                <mesh
                    geometry={nodes.Object_7.geometry}
                    material={materials["Scene_-_Root"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/mailbox-transformed.glb");
