
const FormInput = ({placeholder, width}:{placeholder: string, width: string}) => {
  return (
    <input type="email" className={`bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${width}`} placeholder={placeholder} required />
  )
}

export default FormInput