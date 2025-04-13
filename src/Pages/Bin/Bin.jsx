import { useEffect } from "react";
import { useNotes } from "../../Context/notesContext";
import Header from "../../Components/Header/Header";
import Notes from "../../Components/NotesCard/Notes";
import SideBar from "../../Components/Sidebar/SideBar";

const Bin = () => {
  const { bin, notesDipatch } = useNotes();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedBin = bin.filter(note => {
        const deletedDate = new Date(note.deletedAt);
        const diffInMinutes = (now - deletedDate) / (1000 * 60);
        return diffInMinutes <= 5;
      });

      if (updatedBin.length !== bin.length) {
        notesDipatch({ type: "UPDATE_BIN", payload: updatedBin });
      }
    }, 60 * 1000); // run every minute

    return () => clearInterval(interval);
  }, [bin, notesDipatch]);

  return (
    <>
      <Header />
      <main className="flex text-black">
        <SideBar />
        <div className="flex flex-col w-[100%]">
          <Notes notes={bin} binPage={true} bin={bin}/>
        </div>
      </main>
    </>
  );
};

export default Bin;
