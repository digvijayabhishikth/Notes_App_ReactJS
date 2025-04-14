import {v4 as uuid} from 'uuid';

const notesReducer = (state,{type,payload})=>{
    switch(type){
        case 'TITLE':
            return {
                ...state,
                title:payload
            }
        case 'TEXT':
            return {
                ...state,
                text:payload
            }
        case 'ADD_NOTE':
            if(!state.title.trim() && !state.text.trim()) return state;
            return {
                ...state,
                notes : [...state.notes, {id:uuid(),title:state.title,text:state.text,date:new Date(),isPinned:false,isArchived:false}]
            }
        case 'CLEAR':
            return {
                ...state,
                title : '',
                text : '',
            }
        case 'PINTOGGLE':
            return {
                ...state,
                notes : state.notes.map((note) => note.id === payload ? {...note,isPinned:!note.isPinned} : note)
            }
        case 'ARCHIVE':
            return {
                ...state,
                notes : state.notes.map((note) => note.id === payload ? {...note,isArchived:!note.isArchived} : note)
            }
        case 'DELETE':
            {
                const deletedNote = state.notes.find(note => note.id === payload);
                return {
                    ...state,
                    notes: state.notes.filter(note => note.id !== payload),
                    bin: [...state.bin, { ...deletedNote, deletedAt: new Date().toISOString() }]
                    }
            }
        case 'Undo':
            {
                const undoNote = state.bin.find(note => note.id === payload);
                const newBin = state.bin.filter(note => note.id !== payload)
                return {
                    ...state,
                    bin : newBin,
                    notes : [...state.notes, undoNote]
                }
            }
        case 'BIN_DELETE':
            return {
                ...state,
                bin: state.bin.filter(note => note.id !== payload)
            }
        case 'CLEAR_ALL':
            return{
                ...state,
                bin: []
            }
        case "UPDATE_BIN":
            return {
                ...state,
                bin: payload
            }
        default:
            return state;
    }
}
export default notesReducer;