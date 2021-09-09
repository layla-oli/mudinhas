import React from 'react';

export default function MessageBox(props){//props são os parâmetros dentro da tag 
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children} {/*props.children é o que está entre as tags do componente MessageBox*/}
    </div>
  );
}