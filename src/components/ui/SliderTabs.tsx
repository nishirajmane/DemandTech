import React, { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Position {
    left: number;
    width: number;
    opacity: number;
}

interface TabProps {
    children: ReactNode;
    setPosition: (position: Position | ((prev: Position) => Position)) => void;
}

interface CursorProps {
    position: Position;
}

export const SlideTabsExample: React.FC = () => {
    return (
        <div className="bg-transparent py-5 ml-100 mr-100 mt-0">
            <SlideTabs />
        </div>
    );
};

const SlideTabs: React.FC = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="font-clash display relative mx-auto flex w-fit rounded-full border-2 border-black bg-transparent p-1"
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Services</Tab>
            <Tab setPosition={setPosition}>Solutions</Tab>
            <Tab setPosition={setPosition}>Clients</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
    const ref = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xl text-white mix-blend-difference md:px-10 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};