import { useNotes } from "../../Context/notesContext";

const Notes = ({ notes, bin, binPage=false}) => {
  const { notesDipatch } = useNotes();

  console.log(notes);

  const onPinCick = (id) => {
    notesDipatch({
      type: "PINTOGGLE",
      payload: id,
    });
  };

  const onArchiveClick = (id) =>{
    notesDipatch({
      type: "ARCHIVE",
      payload:id
    })
  }

  const onDeleteClick = (id) =>{
    notesDipatch({
      type: "DELETE",
      payload:id
    })
  }

  const onUndoClick = (id) =>{
    notesDipatch({
      type: "Undo",
      payload:id
    })
  }
  
  const onBinDeleteClick = (id) =>{
    notesDipatch({
      type: "BIN_DELETE",
      payload:id
    })
  }
  
  const onClearAllClick = (id) =>{
    notesDipatch({
      type: "CLEAR_ALL",
      payload:id
    })
  }

  const getStyles = (note) => {

    return note.isPinned
      ? "material-icons text-xl cursor-pointer text-emerald-800"
      : "material-icons-outlined text-xl cursor-pointer";
  };

  const getStylesA = (note) => {

    return note.isArchived
      ? "material-icons text-xl cursor-pointer text-emerald-800"
      : "material-icons-outlined text-xl cursor-pointer";
  };

  return (
    <>
      <div className="flex flex-col p-5 w-full max-w-8xl mx-auto">
        {
          binPage && bin.length>0 && (
            <div className="w-[85vw] flex justify-end p-2 m-6">
              <button onClick={onClearAllClick} className="w-[7.5rem] h-[2.2rem] p-1 rounded flex justify-center items-center cursor-pointer bg-neutral-400 text-xl gap-1">
                <span class="material-icons-outlined cursor-pointer pt-1">
                  clear_all
                </span>
                Clear All
              </button>
            </div>
          )
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
          {
            notes?.length > 0 && notes.map((note) => (
              <div>
                <div key={note.id} className="w-[17rem] min-h-[7rem] border border-neutral-900 rounded-sm">
                  <div
                    className="flex items-center justify-between  p-1 text-2xl"
                  >
                    <span>{note.title}</span>
                    {
                      !binPage && (
                        <span
                          onClick={() => onPinCick(note.id)}
                          key={note.id}
                          className={getStyles(note)}
                        >
                          push_pin
                        </span>
                      )
                    }
                  </div>
                  <div className="border-t border-black-300 w-8/9 mx-auto my-2"></div>
                  <div className="flex relative mt-2">
                    <span className="w-[100%] h-[5rem] p-1 overflow-hidden">
                      {note.text}
                      <div className="absolute bottom-0 right-0 p-y-1">
                        {
                          !binPage && (
                            <span
                              onClick={() => onArchiveClick(note.id)}
                              key={note.id}
                              className={getStylesA(note)}
                            >
                              archive
                            </span>
                          )
                        }
                        {
                          binPage && (
                            <span class="material-icons-outlined cursor-pointer" onClick={() => onUndoClick(note.id)}>
                              undo
                            </span>
                          )
                        }
                        {
                          binPage ? (
                            <span onClick={() => onBinDeleteClick(note.id)} className="material-icons-outlined text-xl cursor-pointer">
                              delete
                            </span>
                            ) 
                            : 
                            (
                              <span onClick={() => onDeleteClick(note.id)} className="material-icons-outlined text-xl cursor-pointer">
                                delete
                              </span>
                            )
                        }
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Notes;
