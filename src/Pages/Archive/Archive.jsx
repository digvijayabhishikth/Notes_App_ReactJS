import Header from "../../Components/Header/Header";
import Notes from "../../Components/NotesCard/Notes";
import SideBar from "../../Components/Sidebar/SideBar";
import { useNotes } from "../../Context/notesContext";


const Archive = ()=>{

    const {notes} = useNotes();
    const archiveNotes = notes.filter(note => note.isArchived === true);

    return (
        <>
            <Header></Header>
            <main className="flex  text-black">
                <SideBar />
                <div className="flex flex-col w-[100%]">
                    <Notes notes={archiveNotes}/>
                </div>
            </main>
        </>
    )
}

export default Archive;