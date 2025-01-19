import React from 'react'

function ButtonProp(props) {
  return (
    <div className="">
    <div className="flex gap-0">
      <div className="bg-black text-yellow-200 rounded-full p-4">
        {" "}
        {props.val}{" "}
      </div>
      <div className="bg-gray-400 text-black p-4 rounded-full">{props.text}</div>
    </div>
  </div>
  )
}

export default ButtonProp