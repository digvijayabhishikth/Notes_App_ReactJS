import logo from "../../assets/images-removebg-preview.png"

const Header =() => {
    return (
        <>
            <header className=" w-full flex px-5 py-3 pb-2  border-b-2  border-b-gray-500/10">
                <div className="w-18 h-15 x">
                    <img src={logo} alt="logo" className="w-full h-full  bg-cover object-cover" />
                </div>
                <h1 className="text-green-900 text-5xl py-3 font-bold">Notes</h1>
            </header>
        </>
    )
}

export default Header;