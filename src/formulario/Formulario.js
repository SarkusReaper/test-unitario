import React from "react";
import Input from "../input/Inputs";
import Select from "../select/Select";
import Button from "../button/Button";
import '../formulario/Formulario.css'

class Formulario extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            marca: '',
            modelo: ''
        }
    }

    handleChangeMarca = (event) => {
        console.log(event.target.value)
        this.setState({
            marca: event.target.value
        })
    }


    render() {

        let aMarcas = [
            {key:1, nombre:'Dodge'},
            {key:2, nombre:'Hyundai'},
            {key:3, nombre:'Ford'},
            {key:4, nombre:'Audi'},
            {key:5, nombre:'Ferrari'},
            {key:6, nombre:'Tesla'},
            {key:7, nombre:'BMW'},
            {key:8, nombre:'Nissan'},
            {key:9, nombre:'Honda'},
            {key:10, nombre:'Volkswagen'},
        ];
        
        let aModelos = [
            {key:1, nombre:'Challenger'},
            {key:2, nombre:'Veloster'},
            {key:3, nombre:'Focus'},
            {key:4, nombre:'Sedan'},
            {key:5, nombre:'Roma'},
            {key:6, nombre:'Roadster'},
            {key:7, nombre:'Santiago'},
            {key:8, nombre:'Sentra'},
            {key:9, nombre:'Civic'},
            {key:10, nombre:'Lamando'},
        ];

        return (

            
            <div className="container">
                <Input  types='text' name= 'Nombre:'/>
                <Input  types='number' name= 'Año:'/> 
                <Select items={aMarcas} name= 'Marca:' />
                <Select items={aModelos} name= 'Modelo:' />
                <Button />
            </div>
        )
    }
};

export default Formulario;