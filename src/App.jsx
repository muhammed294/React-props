import Index from './components/Index/Index'
import './components/style/style-for-upper-part.css'
import './components/style/style.css'
import { userData } from './assets/userdata/userdata.js'

function App() {
  return (
    <div className="container">
      <section className="wrapper">
        <h1>Business Card app (using HTML & CSS only)</h1>
      </section>
      {/* //replicate strategy
        <Index 
        color="firstcolor" 
        name="Adugna" 
        email="adugna@gmail.com" 
        number="+123-456-789"
        />
        <Index 
        color="secondcolor" 
        name="Muhammed" 
        email="muhammed@gmail.com" 
        number="+123-456-789"
        />
        <Index 
        color="thirdcolor" 
        name="abebe" 
        email="abebe@gmail.com" 
        number="+123-456-789"
      /> */}

      {/* using local database(Array mathod) */}
        {userData.map(({name, color, email, number, batch}) => {
          return (
            <Index 
              key = {email}
              color={color} 
              name={name} 
              email={email} 
              number={number}
              batch={batch} 
            />  
          );
        })}

    </div>
  );
}

export default App;