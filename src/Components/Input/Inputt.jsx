const Input = ({title,text,notesDipatch}) => { 

    const onTitleChange = (e)=>{
        notesDipatch({
            type : 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e)=>{
        notesDipatch({
            type : 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = ()=>{
        notesDipatch({
            type : 'ADD_NOTE'
        })
        notesDipatch({
            type : 'CLEAR'
        })
    } 
  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <div className="flex flex-col w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative gap-3">
          <input value={title} onChange={onTitleChange} placeholder="Enter title" className="h-[42px] border focus:outline-none p-1" />
          <textarea value={text} onChange={onTextChange} placeholder="Enter text" className="h-[100px] border focus:outline-none p-1" />
          <button  disabled={title.length===0} onClick={onAddClick} className="absolute bottom-[-27px] right-[-27px]  text-amber-100 border-2 bg-indigo-800 border-indigo-800 rounded-full w-14 h-14 flex items-center justify-center focus:outline-none cursor-pointer">
            <span className="material-icons-outlined text-xl">add</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
