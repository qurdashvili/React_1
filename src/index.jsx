import React, {Component} from "react";
import  ReactDOM  from "react-dom/client";
import HelloWorld from "./HelloWorld";


class Index extends Component {
    render(){

        return(
            <>
            <HelloWorld></HelloWorld>
            </>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<HelloWorld />);