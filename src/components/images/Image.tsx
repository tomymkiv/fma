interface Props {
    enlace: string;
    clases?: string;
}


function Image(props: Props) {
    const { enlace, clases } = props;

    return <img src={enlace} alt="Imagen" className={'rounded-lg ' + clases} />;
}

export default Image;