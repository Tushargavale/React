import React from "react"


 const DummyInput=({onAmountchange,onCurrencychange,

    currency=[],
    label="none",
    setCurrency,
    amount

})=>{
    
  
 



    return(<>
     <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-white-900">
       {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
       
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          value={amount}
          onChange={(e)=>onAmountchange(e.target.value)  }
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={(e)=>onCurrencychange(e.target.value) }
            value={setCurrency}
          >
            {currency.map((e,index)=>{
                return <option key={index} value={e} >{e}</option>
            })}
          </select>
        </div>
      </div>
    </div>
    </>)
}

export default React.memo(DummyInput)