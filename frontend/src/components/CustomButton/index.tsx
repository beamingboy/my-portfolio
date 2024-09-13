import { useTheme, Button } from "@mui/material";

interface CustomButtonProps {
    text: string;
}

export function CustomButton({ text }: CustomButtonProps) {
    const theme = useTheme();

    return (
        <Button
            variant='outlined'
            sx=
            {{
                borderRadius: '20px',
                fontSize: theme.typography.body2.fontSize,
                padding: '10px 30px'
            }}
        >
            {text}
        </Button>
    );
}

export default CustomButton;