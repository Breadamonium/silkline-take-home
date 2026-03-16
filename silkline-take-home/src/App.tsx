// App.tsx
import TrafficLight from './components/TrafficLight'; 
import './App.css'; 

function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <TrafficLight />
    </main>
  );
}

export default App;