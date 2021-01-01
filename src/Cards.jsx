import React from 'react';
import Img from './Img';
import Heading from './Heading';
function Cards(props){
    //console.log(props);
    return (
      <>
    <div className="cards">
      <div className='card'>
       <Img imgsrc={props.imgsrc}/>
       <div className="card_info" >
        <span className="card_category"> {props.title} </span>
        <Heading sname={props.sname}/>
        <a href={props.link} target="_abc">
         <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
    )
  }
  export default Cards;