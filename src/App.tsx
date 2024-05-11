import './App.css'
import AlertCard from './components/AlertCard/AlertCard'
import Card from './components/Card/Card'
import Provider from './components/context/Provider'

function App() {


  return (
    <div className="main">
      <Provider>
          <Card/>
          <AlertCard/>
      </Provider>
    </div>
      

  )
}

export default App
