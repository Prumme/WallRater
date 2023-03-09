import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
function Download({ source }) {

    return (
        <div className='z-2 absolute bottom-4 left-4 bg-black opacity-50 cursor-pointer rounded-full p-2 hover:scale-105 transition ease-in'>
            <a href={source} download={"WallRater-image-" + source.split('/')[3].split('.')[0]}><ArrowDownTrayIcon className="h-8 w-8 text-white hover:scale-105 transition ease-in"></ArrowDownTrayIcon></a>
        </div>
    );
}

export default Download;

