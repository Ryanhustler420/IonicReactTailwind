import React, { useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector';

const screen_sizes = {
    'sm': { width: 640, name: 'sm' },
    'md': { width: 768, name: 'md' },
    'lg': { width: 1024, name: 'lg' },
    'xl': { width: 1280, name: 'xl' },
    '2xl': { width: 1536, name: '2xl' },
}
let current_size = screen_sizes.sm;

export const Resizer: React.FC<{
    onChange: (width: number | undefined, name: string | undefined) => void;
}> = props => {
    const { width, ref } = useResizeDetector();
    useEffect(() => {
        if (width! <= screen_sizes.sm.width) {
            if (current_size.name !== screen_sizes.sm.name) {
                current_size = screen_sizes.sm;
                props.onChange(width, current_size.name);
            }
        } else if (width! <= screen_sizes.md.width) {
            if (current_size.name !== screen_sizes.md.name) {
                current_size = screen_sizes.md;
                props.onChange(width, current_size.name);
            }
        } else if (width! <= screen_sizes.lg.width) {
            if (current_size.name !== screen_sizes.lg.name) {
                current_size = screen_sizes.lg;
                props.onChange(width, current_size.name);
            }
        } else if (width! <= screen_sizes.xl.width) {
            if (current_size.name !== screen_sizes.xl.name) {
                current_size = screen_sizes.xl;
                props.onChange(width, current_size.name);
            }
        } else if (width! <= screen_sizes["2xl"].width) {
            if (current_size.name !== screen_sizes['2xl'].name) {
                current_size = screen_sizes['2xl'];
                props.onChange(width, current_size.name);
            }
        } else {
            if (current_size.name !== screen_sizes['2xl'].name) {
                current_size = screen_sizes['2xl'];
                props.onChange(width, current_size.name);
            }
        }
    }, [width]);

    return <div ref={ref}></div>;
}