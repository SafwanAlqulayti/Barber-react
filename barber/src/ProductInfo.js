import React, { Component } from 'react';
import './App.css';

class ProductInfo extends Component {
    render() {
      const style = {
          width: "200px",
          height: "200px",
          border: "border:1px; border-style:solid; border-color:#FFf000;padding:10px" 
      }
 
        return (
           
                <div className="col-md-4"  style={{style}}>
              
           <img src={this.props.img} alt=""   ></img>     
           <p>{this.props.name}</p>
           <p>{this.props.description}</p>
           <p>{this.props.price}</p>
            </div>
     
        );
    }
}

export default ProductInfo;