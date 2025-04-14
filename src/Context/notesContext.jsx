import { createContext, useContext, useReducer, useEffect } from "react";
import notesReducer from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const initialState = {
        text: '',
        title: '',
        notes: JSON.parse(localStorage.getItem("notes")) || [],
        bin: JSON.parse(localStorage.getItem("bin")) || []
    };

    const [state, dispatch] = useReducer(notesReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(state.notes));
        localStorage.setItem("bin",JSON.stringify(state.bin));
    },[state.notes,state.bin])

    return (
        <NotesContext.Provider value={{ ...state, notesDipatch : dispatch}}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
