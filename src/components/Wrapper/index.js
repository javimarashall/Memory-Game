import { Component } from "react";
import "./style.css";

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div className="wrapper">{this.props.children}</div>)
    }
}