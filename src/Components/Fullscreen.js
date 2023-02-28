import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
function Fullscreen() {



    return (
        <div onClick={() => openFullscreen()} className='absolute bottom-4 right-4 bg-black opacity-50 cursor-pointer rounded-full p-2 hover:scale-105 transition ease-in'>
            <ArrowsPointingOutIcon className="h-8 w-8 text-white hover:scale-105 transition ease-in"></ArrowsPointingOutIcon>
        </div>
    );
}

export default Fullscreen;

function openFullscreen() {
    const elem = document.getElementById("current-wallpaper");
    if (!elem) return;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}