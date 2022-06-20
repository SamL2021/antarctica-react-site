import "./button.css";
import { Link } from "react-router-dom";

// Array of CSS button style classes
const STYLES = ["btn--primary", "btn--outline", "btn--test"];

// Array of CSS button sizes classes
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/video" className="btn-mobile">
            <Button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {/* Automatically displays components */}
                {children}
            </Button>
        </Link>
    );
};
