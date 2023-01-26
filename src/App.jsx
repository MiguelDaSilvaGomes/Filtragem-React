import React, { useState } from 'react';
import './App.css'

    const carros = [
      {categoria:"Esporte" ,Preco: "11000" , modelo:"Golf GTI"},
      {categoria:"Esporte" ,Preco: "12000" , modelo:"Camaro"},
      {categoria:"SUV" ,Preco: "13000" , modelo:"HRV"},
      {categoria:"SUV" ,Preco: "83000" , modelo:"t-cross"},
      {categoria:"utilitario" ,Preco: "125300" , modelo:"Hilux"},
      {categoria:"utilitario" ,Preco: "90300" , modelo:"Ranger"}
    ]

    const linhas = (cat) => {
      const li = []
      carros.forEach(
        (carro)=> {
           if (carro.categoria.toUpperCase()===cat.toUpperCase() || cat.toUpperCase() === ''){
            li.push(
              <tr>
                <td>{carro.categoria}</td>
                <td>{carro.Preco}</td>
                <td>{carro.modelo}</td>
              </tr>
            )
           }
        }
      )
      return li
    }

    const TabelaCarros = (cat)=>{
      return(
        <table className='h1'>
          <thead>
            <tr>
              <th>Categoria</th><th>Preço</th><th>modelo</th>
            </tr>
          </thead>
          <tbody>
                 {linhas(cat)}
          </tbody>
        </table>
      )
    }

    const pesquisaCategoria= (cat, scat)=> {
      return(
        <div>
          <label className='label'>Digite uma categoria:</label>
          <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}  />
        </div>
      )
    }

const App = () => {

  const [categoria,setcategoria]=useState('')

  return ( 

       <>
          {pesquisaCategoria(categoria,setcategoria)} <br />
          {TabelaCarros(categoria)}
       </>
   );
}
 
export default App;