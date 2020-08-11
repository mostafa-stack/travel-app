import React, { Component } from 'react'
import Tour from '../Tour/Tour' 
import {tourData} from '../../tourData'
import './Tourlist.scss'
export default class Tourlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours : tourData ,
            showCard : true
        };
    }
    removeCard =(id)=>{
        const { tours } = this.state ;
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }
    
    render() {
        const {tours} = this.state
        console.log(tours);
        return (
            <section className='tour-list'>
                {
                    tours.map(tour=> <Tour key={tour.id} tour={tour} removeCard={this.removeCard} ></Tour>)
                }
            </section>
        )
    }
}
