import React, { Component } from 'react'

import logo from "../../resources/images/logo.jpg"
import "../../resources/css/body.css"
import "../../resources/images/logo.jpg"

class Body extends Component {
    render() {
        return (
            <div className = "Body_Box">
                <div className = "Logo_Box">
                    <img src={logo} alt="Logo" />
                </div>

                <div className = "Search_Box_Div">
                    <input className = "Search_Box" type = "text" placeholder = "Search..."/>
                    <button className = "Search_Button" type="submit">Click</button>
                </div>

                <div className = "CFBB">
                    <div>
                        <button className = "CF_Button">
                            <a href = "https://ssologin.cuny.edu/cuny.html?resource_url=https%3A%2F%2Fhome.cunyfirst.cuny.edu%252Fpsp%252Fcnyepprd%252FEMPLOYEE%252FEMPL%252Fh%252F%3Ftab%253DDEFAULT">CUNY First</a>
                        </button>
                    </div>

                    <div>
                        <button className = "CF_Button">
                            <a href = "https://ssologin.cuny.edu/cuny.html?resource_url=https%3A%2F%2Fbbhosted.cuny.edu%252F">Black Board</a>
                        </button>
                    </div>
                </div>
                

            </div>
        )
    }
}
export default Body