import { useState } from 'react'

const FormCheckBox = () => {
  const [isChecked, setChecked] = useState(true);

  return (
    <input checked={isChecked} onChange={() => setChecked(!isChecked)} type="checkbox" className="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
  )
}

export default FormCheckBox