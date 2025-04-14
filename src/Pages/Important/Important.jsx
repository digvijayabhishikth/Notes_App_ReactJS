import Header from "../../Components/Header/Header";
import Notes from "../../Components/NotesCard/Notes";
import SideBar from "../../Components/Sidebar/SideBar";
import { useNotes } from "../../Context/notesContext";


const Important = ()=>{

    const {notes} = useNotes();
    const pinnedNotes = notes.filter(note => note.isPinned === true);

    return (
        <>
            <Header></Header>
            <main className="flex  text-black flex-1 overflow-hidden">
                <SideBar />
                <div className="flex flex-col w-[100%]">
                    <Notes notes={pinnedNotes}/>
                </div>
            </main>
        </>
    )
}

export default Important;