function Back(props) {
    const className = "h-screen w-screen -z-2 absolute top-0 bg-[" + props.background_color + "]"
    console.log(className)
    return (
        <div className={className}>

        </div>
    );
}

export default Back;