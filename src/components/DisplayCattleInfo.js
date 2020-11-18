import react,{Component} from 'react'
class DisplayCattleInfo extends Component{
    constructor(){
        super()

    }
    render(){
        if(this.props.details){
              return(
                <div className="card-container">
                    <h3 style={{top:"10%"}}>Cattle Information</h3>
                    <div className="lower-container">
                        <table style={{width:"100%"}}>
                            <thead>

                            </thead>
                            <tbody>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Cattle Name :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.cattle_name}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Breed : </td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.breed}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Farmer Id :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.farmer_ID}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Farmer Name :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.farmer_name}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Weight In Kg :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.weight_in_kg}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Stage :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.stage}</strong></td>
                                </tr>
                                <tr style={{height:"41px"}}>
                                    <td style={{width:"50%",textAlign:'right'}}>Age In Months :</td>
                                    <td style={{width:"50%",textAlign:'left'}}><strong>{this.props.details.age_in_months}</strong></td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                            
                        </table>

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