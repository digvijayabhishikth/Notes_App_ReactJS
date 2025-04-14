import { Link, NavLink } from "react-router"

const SideBar = ()=>{

    const getStyles = ({isActive}) =>{
        return isActive ? "bg-gray-400 flex align-center gap-1 rounded-tr-full rounded-br-full" : "hover:bg-gray-400 text-blue-600 flex align-center gap-1 rounded-tr-full rounded-br-full"
    }

    return (
        <aside className="w-44 h-full flex flex-col gap-3 py-4 border-r-2  border-gray-500/10">
                <div className="flex flex-col gap-2 px-3 text-2xl">
                    <NavLink to="/" className={getStyles}>
                        <span className="material-icons-outlined py-1.5">
                            home
                        </span>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/archive" className={getStyles}>
                        <span class="material-icons-outlined py-1.5">
                            archive
                        </span>
                        <span>Archive</span>
                    </NavLink>
                    <NavLink to="/important" className={getStyles}>
                        <span class="material-icons-outlined py-1.5">
                            label_important
                        </span>
                        <span>Important</span>
                    </NavLink>
                    <NavLink to="/bin" className={getStyles}>
                        <span class="material-icons-outlined py-1.5">
                            delete
                        </span>
                        <span>Bin</span>
                    </NavLink>
                </div>
        </aside>
    )
}

export default SideBar