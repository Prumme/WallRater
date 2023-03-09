function Back(props) {
    const className = "h-screen w-screen -z-2 top-0 absolute opacity-50 bg-[" + props.background_color + "]"
    console.log(className)
    return (
        <div className={className}>

        </div>
    );
}

export default Back;