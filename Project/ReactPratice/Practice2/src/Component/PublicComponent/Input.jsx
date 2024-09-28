import React ,{useId} from "react";

const Input=React.forwardRef(({
    label="",
    type="text",
    className="",
    disabled=false,
    value='',
    ...props

},ref)=>{

    const id=useId()
    console.log('Render')
    return(
        <>
       <div className="w-full flex flex-col">
      {label && (
        <label
          className="inline-block mb-1 text-sm font-medium text-gray-700 pl-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type} 
       
       id={id}
        ref={ref}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg bg-white text-gray-900 outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out w-full md:w-100 ${className}`}
        {...props}
      />
    </div>
        </>
    )
})

export default Input