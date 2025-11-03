
export default function Input({label, invalid, ...props}) {

  let labelClassed = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClasses = 'w-full px-3 py-2 leading-tight text-gray-700 borded rounded shadow';
  if(invalid) {
    labelClassed += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClassed += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300'
  }

  return ( 
    <p>
      <label className={labelClassed}>{label}</label>
      <input  className={inputClasses} {...props} />
    </p>)
}