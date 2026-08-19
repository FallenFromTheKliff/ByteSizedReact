import { useState,  } from "react"

function InputPage(){
  return (
    <div>
      <h1>BROOOOO121</h1>
    </div>
  )
}



export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState('');
  const [consumption, setConsumption] = useState(null);
  const [pageState, SetPageState] = useState("");

  function Clear(){
    setConsumption(null);
    setCustomerName("");
  }
  function CalculateBill(){
    setCustomerName("Hala si Rene at Adili");
  }



  return (
    <div className="flex flex-1 flex-col w-full items-center bg-indigo-50">
      <h1 className="">Electricity Bill Calculator {customerName} {consumption}</h1>
      <InputPage></InputPage>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white">
        <input type="text" 
          placeholder="Enter Customer Name"
          value={customerName}
          onChange={(event) => {setCustomerName(event.target.value)}}
          />

        <input type="number"
          placeholder="Enter Consumption(kWh)"
          value={consumption}
          onChange={(event) => {setConsumption(event.target.value)}}
        />


          <button className="bg-black hover:bg-gray-500 rounded-sm"
          type="button" onClick={Clear}>Clear</button>

          <button 
          type="button" onClick={CalculateBill}>CalCulate Bill</button>


      
      
      <div>Sample Form {name}</div>
      

      </div>



    </div>
  )
}