import React from 'react'

const FormSelect = ({ width, options, defaultValue }: { width: string; options: { profileName: string, shipPrice: string }[]; defaultValue: string; }) => {
console.log("options", options);

  return (
    <select id="countries" className={`bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${width}`} >
      <option defaultValue="choose">Choose a {defaultValue}</option>
      {Array.isArray(options) && options.length && options.map((item) => (
        <option key={item.shipPrice} value="US">{item.profileName}</option>
      ))}
    </select>
  )
}

export default FormSelect