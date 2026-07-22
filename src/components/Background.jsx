import { useEffect, useRef } from "react";
import { InitValues, OnResize, OnMouseMovement } from "../scripts/homepage-background";

function Background({ className }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const syncSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            OnResize(canvas);
        };

        const mouseMovement = (event) => {
            OnMouseMovement(canvas, event);
        }

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const intervalId = InitValues(canvas);

        window.addEventListener('resize', syncSize);
        window.addEventListener('mousemove', mouseMovement);
        return () => {
            window.removeEventListener('resize', syncSize);
            window.removeEventListener('mousemove', mouseMovement);
            clearInterval(intervalId);
        };
    }, []);

    return <canvas className={className} ref={canvasRef}></canvas>
}

export default Background
