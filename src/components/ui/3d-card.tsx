import { CSSProperties, HTMLAttributes, ReactNode, useCallback, useRef, useState } from 'react';

type WithClassName<T = {}> = T & { className?: string };

type PolymorphicProps<E extends keyof JSX.IntrinsicElements> = {
  as?: E;
  children?: ReactNode;
} & Omit<JSX.IntrinsicElements[E], 'ref'>;

export function CardContainer({ className = '', children, style, ...rest }: WithClassName<HTMLAttributes<HTMLDivElement>>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const element = containerRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0 to 1
    const py = (event.clientY - rect.top) / rect.height; // 0 to 1
    const rotateY = (px - 0.5) * 20; // -10deg to 10deg
    const rotateX = (0.5 - py) * 20; // -10deg to 10deg
    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
  }, []);

  const combinedStyle: CSSProperties = {
    perspective: 1000,
    transformStyle: 'preserve-3d',
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={combinedStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Provide rotation to CardBody via context-like prop cloning */}
      {Array.isArray(children)
        ? children.map((child, index) => {
            if (child && typeof child === 'object' && 'type' in (child as any)) {
              return (
                // @ts-expect-error children cloning
                <child.type key={index} {...child.props} __cardRotation={rotation} />
              );
            }
            return child as any;
          })
        : (children && typeof children === 'object' && 'type' in (children as any)
            ? // @ts-expect-error children cloning
              <children.type {...(children as any).props} __cardRotation={rotation} />
            : children)}
    </div>
  );
}

export function CardBody({ className = '', children, style, __cardRotation, ...rest }: WithClassName<HTMLAttributes<HTMLDivElement>> & { __cardRotation?: { x: number; y: number } }) {
  const rotation = __cardRotation ?? { x: 0, y: 0 };
  const combinedStyle: CSSProperties = {
    transformStyle: 'preserve-3d',
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: 'transform 150ms ease',
    willChange: 'transform',
    ...style,
  };

  return (
    <div className={className} style={combinedStyle} {...rest}>
      {children}
    </div>
  );
}

export function CardItem<E extends keyof JSX.IntrinsicElements = 'div'>(props: WithClassName<PolymorphicProps<E>> & { translateZ?: number | string }) {
  const { as, className = '', children, translateZ, style, ...rest } = props as any;
  const Component = (as || 'div') as any;
  const tz = typeof translateZ === 'number' ? `${translateZ}px` : translateZ;

  const combinedStyle: CSSProperties = {
    transform: tz ? `translateZ(${tz})` : undefined,
    transformStyle: 'preserve-3d',
    ...style,
  };

  return (
    <Component className={className} style={combinedStyle} {...rest}>
      {children}
    </Component>
  );
}
