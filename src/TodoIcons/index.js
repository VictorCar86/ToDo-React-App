import "./TodoIcons.css";
import { ReactComponent as DeleteIcon } from "./3687412.svg"

const SVGIcons = {
    delete: (color) => <DeleteIcon className="IconSvg IconSvg--delete" fill={color} />,
}

function TodoIcons({ type = "delete", color, onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {SVGIcons[type](color)}
        </span>
    )
}

export { TodoIcons };