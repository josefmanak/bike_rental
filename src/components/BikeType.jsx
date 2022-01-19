import React, { Component } from 'react'
import { Img } from 'react-image'

export default class BikeType extends Component {
 
    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <div className="card my-2">
                    <Img className="card-img-top" src={this.props.img} alt="..." />
                    <div className="card-body">
                        <h5>{this.props.label}</h5>
                        <h6 className="m-3">{this.props.price} Kč/den</h6>
                        <p className="card-text" style={this.props.style}>{this.props.description}</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input data-pos={this.props.id} name='checkbox' checked={this.props.checked} onChange={this.props.onChange} type="checkbox" />
                                </div>
                            </div>
                            <input className="form-control form-control-sm" data-pos={this.props.id} name='value' type="number" value={this.props.value} onChange={this.props.onChange} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
