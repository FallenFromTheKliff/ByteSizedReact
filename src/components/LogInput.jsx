export default function LogInput(props) {
  return (
    <div className="h-28">
      <h3 className="text-xl text-gray-600 font-painter font-bold mb-2">{props.label}</h3>
      <input 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="w-full px-4 py-4 placeholder:font-painter placeholder:text-gray-400 rounded-lg border border-indigo-500"
      />
      {props.error && <p className="text-sm text-red-600 font-painter mt-2">{props.error}</p>}
    </div>
  )
}