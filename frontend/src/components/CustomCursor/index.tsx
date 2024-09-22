import AnimatedCursor from 'react-animated-cursor';
import React from 'react';

export function CustomCursor() {

    return (
        <AnimatedCursor
            showSystemCursor={true}
            trailingSpeed={8}
            innerSize={6}
            outerSize={30}
            color='247, 80, 35'
            outerAlpha={0}
            innerScale={0.7}
            outerScale={2}
            outerStyle={{
                border: '3px solid #F75023',
                background: 'rgba(248, 140, 111, 0.20)',
                mixBlendMode: 'exclusion'
            }}
            clickables={[
                'a',
                'button',
                '.link'
            ]}
        />

    );
}

export default CustomCursor;
