import React, { Component } from 'react'

export default class Calendar extends Component {


    render() {
        return (
            <div className="input group mb-1">
                <div className="card col-12" style={this.props.height1}>
                    <div className="row no-gutters">
                        <div div className="d-none d-lg-flex col-lg-6">
                            <img src={this.props.img} height={this.props.height2} alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">
                                <h5 className="card-title">Délka zápůjčky</h5>
                                <div className="input-group mb-3">
                                    <select  className="form-control" value={this.props.value} onChange={this.props.onChange}>
                                        <option value="5">5 dnů</option>
                                        <option value="7">týden</option>
                                        <option value="14">14 dní</option>
                                        <option value="30">měsíc</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
