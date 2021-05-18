import { Component } from "react";
import "./style.css";

export default class BeagleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            
                <div className="card" onClick={() => this.props.handler(this.props.id)}>
                    <div className="img-container">
                        <img alt="memory game" src={this.props.image} />
                    </div>
                </div>
               
        );
    }
}
