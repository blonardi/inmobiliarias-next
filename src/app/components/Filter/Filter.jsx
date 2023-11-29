// import 'tailwindcss/tailwind.css'
export const Filter = () => {
  return (
    <>
      <div className='w-3/5 my-8 m-auto flex justify-between items-center p-4 bg-sky-600 rounded-full shadow-sm'>
        <div className='filter'>
          <select name='form-select block w-full mt-1'>
            <option value='todos' defaultValue='todos'>
              Todos
            </option>
            <option value='casas'>Casas</option>
            <option value='terrenos'>Terrenos</option>
            <option value='lotes'>Lotes</option>
          </select>
        </div>
        <div className='filter'>
          <select name='select'>
            <option value='todos' defaultValue='todos'>
              Todos
            </option>
            <option value='casas'>Larroque</option>
            <option value='terrenos'>Gualeguaychu</option>
            <option value='lotes'>Irazusta</option>
          </select>
        </div>
        <div className='button-filter'>
          <button
            type='submit'
            value='Filtrar'
            className='bg-sky-400 p-4 rounded-full'
          >
            Filtrar
          </button>
        </div>
      </div>
    </>
  )
}
