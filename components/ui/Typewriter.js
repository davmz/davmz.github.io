"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterComponent({
    data,
    isLoop = false,
    cursor = true,
    cursorStyle = "_",
    typeSpeed = 50,
    deleteSpeed = 50,
    delaySpeed = 1000,
    ...props
}) {
    return (
        <Typewriter
            words={data}
            loop={isLoop}
            cursor={cursor}
            cursorStyle={cursorStyle}
            typeSpeed={typeSpeed}
            deleteSpeed={deleteSpeed}
            delaySpeed={delaySpeed}
            {...props}
        />
    );
}