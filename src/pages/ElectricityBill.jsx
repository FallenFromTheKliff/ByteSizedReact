import { useState, } from "react"

function InputPage({handleSubmit}) {
  const [customerName, setCustomerName] = useState('');
  const [consumption, setConsumption] = useState(null);


  return (
    <div>
      <form onSubmit= {(e)=>handleSubmit(consumption)}>
        <input type="text" name="" id="" />

        <input type="number" name="" id="" />

        <button type="submit">Calculate Bill</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  )
}

function Condition({handleClick}) {
  return (
    <div>
        <div>0-100 kWh = P10 per kWh</div>
        <div>0-100 kWh = P10 per kWh</div>
        <div>0-100 kWh = P10 per kWh</div>
        <div>0-100 kWh = P10 per kWh</div>
        <div>0-100 kWh = P10 per kWh</div>

        <button type="button" 
        onClick={(e)=>handleClick("result_page")}
        >Result Page </button>
    </div>
  )
}

function ResultPage() {
  return (
    <div>
    bro
    </div>
  )
}



export default function ElectricityBill() {
  const [pageState, SetPageState] = useState("input_page");
  const [calculatedValue, setCaculatedValue] = useState("");
  function handleSubmit(value){
    SetPageState("condition_page");
    setCaculatedValue(calculateValue(value));
  }

  function calculateValue(value){
    if(value <=100){
      return value * 10;
    }
    if(value <=200){
      return value * 12;
    }
  }


  return (
    <div className="flex flex-1 flex-col w-full items-center bg-indigo-50">
      <h1 className="">Electricity Bill Calculator</h1>
      {pageState === "input_page" && <InputPage handleSubmit={handleSubmit}/>}
      {pageState === "condition_page" && <Condition handleClick={SetPageState}/>}
      {pageState === "result_page" && <ResultPage></ResultPage>}

    </div>
  )
}