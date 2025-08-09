function BackBtn() {
    const prevPage = () =>{
        history.back()
    }
    return <button onClick={prevPage} className="p-4 bg-blue-500 text-lg font-medium rounded-lg hover:bg-blue-600 cursor-pointer transition-background duration-500">Volver</button>;
}

export default BackBtn;