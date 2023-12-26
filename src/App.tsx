import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Notification } from './components/partials/Notification';
import { useTodo } from './contexts/TodoContext';
 
function App() {
  const todo = useTodo();

  return (
    <>
    { todo.notification.active && <Notification /> }
    <div className='bg-gradient-to-tl w-full h-screen from-blue-400 to-purple-400 dark:from-blue-800 dark:to-purple-800 grid place-items-center'> 
      <div className='min-h-[80vh] min-w-[30vw] bg-white dark:bg-gray-900 shadow rounded-md grid grid-rows-[auto_1fr_auto]'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
