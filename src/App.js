import react, {Component} from 'react';


import './App.css';
import DisplayCattles from './components/DisaplayCattles'

import firebase from 'firebase'

import loadingImage  from './images/loader.gif'

var firebaseConfig = {
  apiKey: "AIzaSyDtSlc0EeP70nK05gijkLowDNhMrfR56jc",
  authDomain: "dvara-first.firebaseapp.com",
  databaseURL: "https://dvara-first.firebaseio.com",
  projectId: "dvara-first",
  storageBucket: "dvara-first.appspot.com",
  messagingSenderId: "1075279273830",
  appId: "1:1075279273830:web:33ea47b78878693408b2a7",
  measurementId: "G-HSTH4VCXGV"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


class App extends Component {
  constructor(props){
    super(props);

    this.state = {result:[],number:'',loading:true}
    this.getDetails = this.getDetails.bind(this)
  }
  getDetails(event) {
    var temp = event.target.value
    this.setState({number: temp},()=>{
    })
  }
  componentDidMount = async() =>{
      var myData ={};
      var data =  firebase.database().ref('Files')
      await data.once('value').then(function(res){
        res.forEach((item)=>{myData[item.key]=item.val()})
      }) 
      this.setState({result:myData,loading:false})   
  }
  render(){
    var items = this.state.result;
    var tifOptions = [];
    Object.keys(items).forEach(function(key) {
        if(key.startsWith("+")){
          tifOptions.push(<option key={key} value={key}>{key.substring(3,)}</option>)
        }        
     });
     if(this.state.loading){
        return(
          <div>
            <img src={loadingImage} alt="Loading...." style={{height:"10vh",width:"10vh",padding:"20% 46% "}}/>
          </div>
        )
     }
     else{
      return (
        <div className="App">
          <header className="App-header">
            <h3>DashBoard</h3>
          </header>
          <div className="select-box">
            <select
              value = {this.state.number}
              onChange = {this.getDetails}
              name="Mobile"
            >
              <option className="options" key='' selected disabled value=''>Mobile Number</option>
              {tifOptions}
            </select>
          </div>
          
          <DisplayCattles cattle = {this.state.result[this.state.number]}/>
        </div>
      );
     }
  }
  
}

export default App;

