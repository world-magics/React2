import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext=React.createContext();

//two components - Provider,Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>Context API</h3>
      <List  />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData=useContext(PersonContext);
  console.log(mainData);
      return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            // removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id,name,firstname }) => {
  const {removePerson}=useContext(PersonContext);
  console.log(data);
      return (
    <div className='item'>
      <h4>{name}</h4>
      <h4>{firstname}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
