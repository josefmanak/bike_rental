import React, { Component } from 'react'

export default class TotalPrice extends Component {
    render() {
        return (
            <div className="input-group mb-1 justify-content-center">
                <input type="text" className="form-control" name="celkem" value={this.props.total} onChange={this.props.onChange} aria-label="Total price" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={this.props.onClick}>&nbsp;&nbsp;&nbsp;Celková cena&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
        )
    }
}
