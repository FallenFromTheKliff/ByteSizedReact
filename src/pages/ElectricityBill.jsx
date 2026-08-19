import { useState,  } from "react"

export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState('');
  const [pageState, SetPageState] = useState("");

  function Clear(){}
  function Submit(){}
  


  return (
    <div className="flex flex-1 flex-col w-full items-center bg-indigo-50">
      <h1 className="">Electricity Bill Calculator {customerName}</h1>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white">
        <input type="text" 
          placeholder="Enter Customer Name"
          value={customerName}
          onChange={(event) => {setCustomerName(event.target.value)}}
          />


          <button type="button" onMouseEnter={Clear}>Clear</button>
          <button type="button">Submit</button>


      
      
      <div>Sample Form {name}</div>
      

      </div>



    </div>
  )
}