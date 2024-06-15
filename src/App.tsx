import Planet from "./pages/planet";
import StateManagement from "./pages/state-management";

function App(): JSX.Element {
   return (
      <div className='w-screen'>
         <StateManagement />
         <Planet />
      </div>
   );
}

export default App;
