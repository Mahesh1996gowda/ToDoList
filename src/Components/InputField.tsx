import { useRef } from "react"
import"./style.css"
interface props{
  toDo:string,
  setToDo:React.Dispatch<React.SetStateAction<string>>
  Handler:(e:React.FormEvent)=>void
}
const InputField =({toDo,setToDo,Handler}:props) => {
 const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{Handler(e)
      inputRef.current?.blur()
    }}>
        <input
        ref={inputRef}
        type="text" className='input_box' placeholder='Enter the task'value={toDo} onChange={(e)=>setToDo(e.target.value)} />
      <button className='input_submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField

