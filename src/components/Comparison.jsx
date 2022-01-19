import React, { Component } from 'react'

export default class Comparison extends Component {
    render() {
        return (
            <div>
                <div className="input-group mb-1">
                    <input className="col-12 form-control" type="text" name="lim" value={this.props.limit} onChange={this.props.onChange} placeholder="Kolik jste ochoten zaplatit?" />
                    <div className='input-group-append'>
                        <label className="input-group-text">Zadejte svůj limit</label>
                    </div>
                </div>
                <div className="input-group mb-1">
                    <input className="col-12 form-control" type="text" name="lim_kont" value={(this.props.limit >= this.props.total)? 'V pořádku':'Nedostatek financí'} placeholder="Kontrola limitu" />
                    <div className='input-group-append'>
                        <label className="input-group-text">&nbsp;Kontrola limitu&nbsp;&nbsp;</label>
                    </div>
                </div>
                <div className="input-group">
                    <input type="email" className="form-control" name="" onChange={this.props.onchange} placeholder='Zadejte e-mail' aria-label="E-mail" aria-describedby="button-addon2" required />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" id="button-addon2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Odeslat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </div>
            </div>
        )
    }
}
