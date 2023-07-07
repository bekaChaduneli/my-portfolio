import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "./Loader";
import { MailBox } from "./Mailbox";

export default function MailBoxLogo() {
    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <Stage environment="night" intensity={1}>
                    <MailBox />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}
