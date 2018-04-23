import React from 'react';
import ReactDOM from 'react-dom';

const  App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat =[ {
        nimi: "Reactin perusteet",
        tehtavia: 10
    },
    {
        nimi:  "Tiedonvälitys propseilla",
        tehtavia: 7
    },
     {
        nimi: "Komponenttien tila",
        tehtavia: 14
    }
]
    
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osat[0].nimi} osa2={osat[1].nimi} osa3={osat[2].nimi} tehtavia1={osat[0].tehtavia} tehtavia2={osat[1].tehtavia} tehtavia3={osat[2].tehtavia} />
            <Yhteensa yhteensa={ osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia } />
        </div>

    )
}
const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )

}

const  Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtava}</p>
            
         </div>

    )

}
const  Sisalto = (props) => {
    return (
        <div>
          <Osa osa={props.osa1} tehtava={props.tehtavia1}/>
          <Osa osa={props.osa2} tehtava={props.tehtavia2} />
          <Osa osa={props.osa3} tehtava={props.tehtavia3} />
            
        </div>

    )

}

const Yhteensa = (props) => {
    return (
    <div>
        <p>Yhteensä: {props.yhteensa}</p>
    </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

