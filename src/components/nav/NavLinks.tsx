import { Link } from "react-router-dom";

interface Props {
    apartado: string;
    text: string;
    clases?: string;
}

function NavLinks(props: Props) {
    const { apartado, text, clases } = props;

    return <>
        <Link to={apartado}>
            <li className={`pl-4 flex gap-0.5 ` + clases}>{text}</li>
        </Link>
    </>
}

export default NavLinks;