import Button from "./Button";


export default function Custom404 () {
    return (
        <div className="pt-20 overflow-hidden">
            <div className="relative py-16 grid place-content-center text-center">
                
                <h1 className="text-accent-main font-bold mb-2">404 ERROR</h1>
                <p className="text-white font-bold text-4xl mb-4">Huh, weird</p>
                <p className="text-white mb-8">It looks like this page doesn't exist</p>
                <Button
					text="Take me home"
					type="primary"
					width="w-40"
					margin="sm:mx-4"
					link="/"
					extras=""
				></Button>
            </div>
        </div>

    )
}
