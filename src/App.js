import React from 'react';
import './App.css';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Shows from './pages/Shows'
import Services from './pages/Services'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import Bal from './pages/bal'
import RapDj from './pages/rapDj'
import Festival from './pages/festival'
import Comedie from './pages/comedie'
import Seminaire from './pages/seminaire'
import Foire from './pages/foire'
import Autres from './pages/autres'
import Promotion from './pages/promotion'
import Publication from './pages/publication'
import VenteDeBillets from './pages/venteDeBillets'
import Autre from './pages/autre'
import Artistes from './pages/artistes'
import GroupesMusicaux from './pages/groupesMusicaux'
import Seminaires from './pages/seminaires'
import AutresNews from './pages/autresNews'
import BalPasse from './pages/balPassee'
// import Apropos from './pages/Apropos'
//import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';

const  App=() =>{

  const [data, setData]=React.useState({})
  const getData=()=>{
     $.ajax({
       url:'/data.json',
       dataType:'json',
       cache: false,
       success: function(data){
          setData(data); 
       },
       error: function(xhr, status, err){
         console.log(err);
         alert(err);
       }
     });
    }
   
    React.useEffect(() => {
      getData();
    }, []);
    
    console.log("bbbb",data)    
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={Apropos} />
        <Route path="/home" component={Home} />
        <Route path="/bal-passe" component={BalPasse} />

        <Route path="/bal" render={(props) => <Bal {...props} data={data} />}
       />
        
        <Route path="/apropos" component={Apropos} />

        <Route path="/rapDj"
        render={(props) => <RapDj {...props} data={data} />}
       />
        {/* <Route exact path="/rapDj" component={RapDj} data={data} /> */}

        <Route exact path="/festival"
        render={(props) => <Festival {...props} data={data} />}
       />

        <Route exact path="/comedie"
                render={(props) => <Comedie {...props} data={data} />}
              />
        <Route exact path="/foire"
                render={(props) => <Foire {...props} data={data} />}
              />
        <Route exact path="/seminaire"
                        render={(props) => <Seminaire {...props} data={data} />}
                      />

        {/* <Route exact path="/seminaire" component={Seminaire} /> */}
       
        <Route exact path="/autres" component={Autres} />
        <Route exact path="/promotion" component={Promotion} />
        <Route exact path="/artistes" component={Artistes} />
        <Route exact path="/publication" component={Publication} />
        <Route exact path="/venteDeBillets" component={VenteDeBillets} />
        <Route exact path="/autre" component={Autre} />
        <Route exact path="/groupesMusicaux" component={GroupesMusicaux} />
        <Route exact path="/seminaires" component={Seminaires} />
        <Route exact path="/autresNews" component={AutresNews} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
        
        <Route component={Error} />
      </Switch>

    </>
  );
}

export default App;



// com o "slug", com qualquer slug(palavras depois SingleRoom) ficamos na mesma pagina "SingleRoom".
// Exemplo: http://localhost:3000/single-room/blabla, http://localhost:3000/single-room/papa , ficamos na pagina Rooms.

//NB) o components "NavBar" fica fora do "Switch" tag, porque queremos que o navbar aparecer sempre para qualquer pagina.