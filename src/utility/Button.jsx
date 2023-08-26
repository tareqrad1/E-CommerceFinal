import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const Button = ({title, to}) => {
  const Navigate = useNavigate()
  return (
    <button className="px-7 py-2 bg-black text-white" onClick={() => Navigate(`${to}`)}>{title}</button>
  )
}

export default Button