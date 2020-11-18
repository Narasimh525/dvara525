import react,{Component} from 'react'
import { FormGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import DisplayCattleInfo from './DisplayCattleInfo'
class DisplayCattles extends Component{
    constructor(){
        super()

        this.state={
            key:'',
            checked:''
        };
        this.getDetails=this.getDetails.bind(this)
    }
    getDetails(key){
        this.setState({key:key,checked:key},()=>{console.log(this.props.cattle.cattles[this.state.key]);})
    }
    render(){
        if(this.props.cattle){
            var cattle = this.props.cattle.cattles;
            var tifOptions = [];
            Object.keys(cattle).forEach((key)=> {
                if(key){
                    tifOptions.push(
                        <div style={{display:"inline"}}>
                            <Radio checked={this.state.checked === key} onClick={this.getDetails.bind(this,key)} key={key}  type="radio" name="cattle" value={cattle[key].cattle_name} />
                            <label>{cattle[key].cattle_name}</label>
                        </div>
                     )
                }  
            });
            return(
                <div>
                    <h2>Here! is the List of the Cattles</h2>
                    {/* <RadioGroup row><Radio />{tifOptions}<Radio /></RadioGroup> */}
                    <div style={{marginTop:"-1%"}}>
                        {tifOptions}
                    </div>
                    <DisplayCattleInfo details={this.props.cattle.cattles[this.state.key]}/>
                    
                </div>
                
                
            )
        }
        return(
            <div>
                

            </div>
            
        )
        
    }
}

export default DisplayCattles;