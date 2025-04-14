import Header from "../../Components/Header/Header"
import Input from "../../Components/Input/Inputt";
import Notes from "../../Components/NotesCard/Notes";
import SideBar from "../../Components/Sidebar/SideBar";
import {useNotes} from "../../Context/notesContext"

const Home = ()=>{

    const {title,text,notes,bin, notesDipatch} = useNotes();

    const otherNotes = notes.filter(({isPinned,isArchived}) => !isPinned&&!isArchived)

    return (
        <>
            <Header></Header>
            <main className="flex  text-black flex-1 overflow-hidden">
                <SideBar />
                <div className="flex flex-col w-[100%]">
                    <Input text={text} title={title} notesDipatch={notesDipatch}/>
                    <Notes notes={otherNotes} bin={bin}/>
                </div>
            </main>
        </>
    )
}

export default Home;