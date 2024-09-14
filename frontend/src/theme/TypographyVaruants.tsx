import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body3: React.CSSProperties;
        body4: React.CSSProperties;
    }

    // Allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
        body4?: React.CSSProperties;
    }
}

//Extend the Typography props to support the new variant
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true;
        body4: true;
    }
}