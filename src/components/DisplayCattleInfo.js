import react,{Component} from 'react'
class DisplayCattleInfo extends Component{
    constructor(){
        super()

    }
    render(){
        if(this.props.details){
              return(
                <div style={{margin:"0% 20% 0% 20%"}}>
                    <h3 style={{top:"10%"}}>Cattle Information</h3>
                    <div className="div-parent">
                        <div className="div-child">Cattle Name</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.cattle_name}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Breed</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.breed}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Farmer Id</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.farmer_ID}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Farmer Name</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.farmer_name}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Weight In Kg</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.weight_in_kg}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Stage</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.stage}</div>
                    </div>
                    <div className="div-parent">
                        <div className="div-child">Age In Months</div>
                        <div className="div-child">:</div>
                        <div className="div-child">{this.props.details.age_in_months}</div>
                    </div>
                </div>
            )  
        }
        return(
            <div>

            </div>
        )
        
    }
}

export default DisplayCattleInfo;