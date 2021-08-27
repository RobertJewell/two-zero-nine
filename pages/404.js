import Vinyl from "../components/decoration/Vinyl";

export default function Custom404 () {
    return (
        <div className="pt-20 overflow-hidden">
            
            <div className="relative h-screen grid place-content-center">
                <Vinyl
					width="w-600 md:w-800"
					scale="scale-150"
					rotation="rotate-90 sm:-rotate-90"
					translationX="translate-x-2/4  sm:-translate-x-2/4  "
					translationY="sm:-translate-y-2/4"
				></Vinyl>
                <h1 className="text-accent-main font-bold">404 ERROR</h1>
                <p className="text-white font-bold text-xl">Huh, weird</p>
                <p className="text-white font-bold text-xl">It looks like this page doesn't exist</p>
            </div>
        </div>

    )
}
