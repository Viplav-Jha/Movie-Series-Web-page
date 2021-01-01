import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards'
import Sdata from './Sdata' ;
import './index.css'

//console.log(Sdata[0]);
function ncard(val){
  return( 
  <Card
    key={val.id} 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
 );
}
ReactDOM.render(
  <>
  <h1  className="heading_style"> List of top 5 Netflix Series in 2020</h1>
   {Sdata.map(ncard)}
   </>
,document.getElementById("root")
);