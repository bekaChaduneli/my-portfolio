import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Avatar } from "./Avatar";

import CanvasLoader from "./Loader";
export default function MainLogo() {
    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <Stage environment="night" intensity={1}>
                    <Avatar />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}
