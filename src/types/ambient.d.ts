declare module 'lenis/react' {
  import type { Ref } from 'react';
  export const ReactLenis: (props: any & { ref?: Ref<any> }) => JSX.Element;
  export function useLenis(
    callback?: (lenis: any) => void,
    deps?: any[],
    priority?: number
  ): any;
}

declare module 'gsap' {
  const gsap: any;
  export default gsap;
}



