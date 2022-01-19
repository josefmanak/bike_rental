import React, { Component } from 'react'

export default class AddExtras extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    <div className="card mb-3" style={this.props.height2}>
                        <div className="row no-gutters">
                            <div className="d-none d-lg-flex col-lg-7">
                                <img src={this.props.img1} height={this.props.height1} className="card-img-top" alt="..." />
                            </div>
                            <div className="col-lg-5">
                                <div className="card-body" style={this.props.text}>
                                    <h5 className="card-title">Cyklonosič střešní</h5>
                                    <h6>5% z celkové ceny zápůjčky</h6>
                                    <div className="input-group justify-content-center" onChange={this.props.onChange}>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input className="input-group-text" type="radio" value="1.05" name="extra" id="extra1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-5">
                    <div className="card mb-3" style={this.props.height2}>
                        <div className="row no-gutters">
                            <div className="col-lg-7 d-none d-lg-flex">
                                <img src={this.props.img2} height={this.props.height1} className="card-img-top" alt="..." />
                            </div>
                            <div className="col-lg-5">
                                <div className="card-body">
                                    <h5 className="card-title">Cyklonosič na tažné zařízení</h5>
                                    <h6>10% z celkové ceny zápůjčky</h6>
                                    <div className="input-group justify-content-center" onChange={this.props.onChange}>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input className="input-group-text"  type="radio" value="1.1" name="extra" id="extra2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-2">
                    <div className="card mb-3" style={this.props.height2}>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">Bez cyklonosiče</h5>
                                    <div className="input-group justify-content-center mt-lg-5 pt-lg-2" onChange={this.props.onChange}>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input className="input-group-text"  type="radio" value="1" name="extra" id="extra3" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}