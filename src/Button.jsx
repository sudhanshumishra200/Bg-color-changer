function Button({setColor}){
    
    return(
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 gap-2'>
            <div className="flex flex-wrap justify-center shadow-lg bg-green-500 p-2 rounded-lg">
                <button onClick={() => setColor("green")}>Green</button>
            </div>
            <div className="flex flex-wrap justify-center shadow-lg bg-red-500 p-2 rounded-lg">
                <button onClick={() => setColor("red")}>Red</button>
            </div>
            <div className="flex flex-wrap justify-center shadow-lg bg-blue-500 p-2 rounded-lg ">
                <button onClick={() => setColor("blue")} >Blue</button>
            </div>
            <div className="flex flex-wrap justify-center shadow-lg bg-yellow-500 p-2 rounded-lg">
            <button onClick={() => setColor("yellow")} >Yellow</button>
            </div>
    
        </div>
    )
}

export default Button