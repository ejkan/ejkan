/// <reference types="vite/client" />

declare module '*?w=800&format=webp' {
    const output: string;
    export default output;
}

declare module '*&as=metadata' {
    const output: {
        src: string;
        width: number;
        height: number;
        format: string;
    };
    export default output;
}

declare module '*&as=srcset' {
    const output: string;
    export default output;
}
