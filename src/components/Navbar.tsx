import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="bg-black fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <Image
                        src="/logo.png" alt="Eternal logo"
                        width={32}
                        height={33}
                        priority
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eternal ID</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
    )
}