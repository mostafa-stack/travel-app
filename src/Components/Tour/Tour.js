import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
    state = {
        showInfo : false
    }
    showInfo = ()=>{
        this.setState({
            showInfo: !(this.state.showInfo)
        })
    }
    render() {
        const {id , img , name  , city , info} = this.props.tour;
        const {removeCard} = this.props
        return (
            <article className='tour' >
                <div className='img-container'>
                    <img src={img} alt='city image'/>
                    <span className='close-btn'>
                        <i className='fas fa-window-close' onClick={()=>removeCard(id)}></i>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{city} </h3>
                    <h4>{name} </h4>
                    <div className='tour-desc'>
                        <span>info {' '}</span>
                        <span className='show-info' onClick={this.showInfo} >
                            <i className='fas fa-caret-square-down'></i>
                        </span>
                        {this.state.showInfo == false ? null : <p className='info'>{info}</p>}
                        
                    </div>
                </div>
            </article>
        )
    }
}
