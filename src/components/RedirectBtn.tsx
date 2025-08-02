interface Props {
    text: string;
    enlace: string;
}

function RedirectBtn(props: Props) {
    const { enlace, text } = props;

    return <div className='w-full flex items-center justify-center'>
        <button className="border border-gray-100 rounded-sm cursor-pointer hover:bg-gray-100 hover:text-gray-800 transition-colors duration-350 flex w-full md:w-[33%] lg:w-[25%]">
            <a href={enlace} className="p-5 w-full">{text}</a>
        </button>
    </div>
}

export default RedirectBtn;