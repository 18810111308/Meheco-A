/**
 * Created by asusu on 2017/6/22.
 */
import React,{Component} from 'react';
import './Milestones.css';
class Mil extends Component{
    render(){
        return(
            <div>
                <ul className="chunk">
                    <li>
                        <ul className="Single">
                            <li className="Single_nian">
                                <h4>{this.props.age}</h4>
                                <div className="introduce"><div>{this.props.id}</div></div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Mil;