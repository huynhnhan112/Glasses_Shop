import React, { Component } from 'react';
import style from '../assets/CSS/glass.module.css';



export default class Glasses extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];


    state = {
        imgSrc: './img/glassesImage/v1.png'
    }

    renderResult = () => {
        return this.arrGlasses.map((glasses, index) => {
            return (
                <div className="col-2" key={index}>
                    <button className="m-3 w-100" onClick={()=>{
                        this.handelChangeGlasses(glasses.id);
                    }}>
                        <img src={`./img/glassesImage/v${glasses.id}.png`} alt="..." className="w-100" />
                    </button>
                </div>
            )
        })
    }

    handelChangeGlasses = (id) => {
        this.setState({
            imgSrc: `./img/glassesImage/v${id}.png`
        })
    }

    render() {
        return (
            <div>
                <header>
                    TRY GLASSES APP ONLINE
                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <img src="./img/glassesImage/model.jpg" width={350} />
                            <div className="img" style={{position: 'absolute', top: '110px', left: '185px', opacity:'0.5'}}>
                                <img src={`./img/glassesImage/v7.png`} width={200} />
                            </div>
                            <div className="content text-left" style={{backgroundColor:'rgba(252,179,126,0.6)', position:'absolute', top:'300px',left:'110px'}}>
                                <h3 style={{color:'#9672C6'}}>FENDI F8750</h3>
                                <p>Light pink square lenses define these <br /> sunglasses, ending with another of pearl effect <br /> tip. </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="./img/glassesImage/model.jpg" width={350} />
                            <div className="img" style={{position:'absolute', top:'110px', right:'185px', opacity:'0.5'}}>
                                <img src={this.state.imgSrc} alt="..." width={200} />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 bg-light">
                    <div className="row mt-5 p-5">
                        {this.renderResult()}
                    </div>
                </div>
            </div>
        )
    }
}
