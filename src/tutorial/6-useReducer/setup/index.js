import React,{useState,useReducer} from 'react'
import Modal from './Modal';
import {data} from '../../../data';

//reducer function
const reducer=(state,action)=>{
  console.log(state);
  if(action.type==='ADD_ITEM'){
    const newPeople=[...state.people,action.payload];
      return {
        ...state,
        people:newPeople,
        isModalOpen:true,
        modalContent:"item added"
      };
  }
  if(action.type==='NO_VALUE'){
    return {...state,isModalOpen:true,modalContent:'please enter value'};
  }
  // return state;
  throw new Error ('no matching action type');
    // console.log(state,action);
    // return state;
  }

const defaultState={
  people:[],
  isModalOpen:false,
  modalContent:'',
}
const Index = () => {
  const [name,setName]=useState('');
  // const [people,setPeople]=useState(data);
  // const [showModal,setShowModal]=useState(false);
const [state,dispatch]=useReducer(reducer,defaultState); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
      // setShowModal(true);
      // setPeople([...people,{id:new Date().getTime().toString(),name}]);
      // setName('');
    const newItem={id:new Date().getTime().toString(),name};
      dispatch({type:'ADD_ITEM',payload:newItem});
      setName('');
    }
    else{
      // setShowModal(true);
        dispatch({type:'NO_VALUE'});
    }
  }

  return (
    <>
      {state.isModalOpen &&<Modal modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input 
          type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person)=>{
        return <div key={person.id}>
          <h4>{person.id+" "}{person.name}</h4>
          


        </div>
      })}
    </>
  );
}

export default Index
