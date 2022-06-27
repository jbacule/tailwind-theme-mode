import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const App = () => {
  const [theme, setTheme] = useState('');

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-cyan-50 dark:bg-slate-900">
      <div className="min-h-[40%] min-w-[30%]">
        <div className="text-center dark:text-white">
          <h1 className="text-4xl font-semibold mb-1">Tailwind Theme Switcher</h1>
          <p className="text-gray-400 text-sm mb-3">Sample theme mode switcher for taildwind with react, typescript and vite.</p>
        </div>
        <div className="w-100 flex justify-center items-center bg-white h-60 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <button 
            onClick={handleThemeSwitch}
            type="button" 
            className={ theme === 'dark' ? 'text-cyan-50' : 'text-slate-900' }>
            { theme === 'dark' ?  <HiMoon size={'7rem'} /> : <HiSun size={'7rem'} /> }
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
