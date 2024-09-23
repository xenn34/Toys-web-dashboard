/* eslint-disable react/prop-types */

const ButtonNav = (props) => {
  return (
    <button onClick={props.onClick} className="inline-flex justify-center w-full px-4 text-lg font-normal text-black whitespace-nowrap hover:underline focus:outline-none cursor-pointer hover:text-slate-500"><li>{props.text}</li></button>
  )
}

export default ButtonNav
