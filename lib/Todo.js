import React from 'react';


// Helper function for generating unique IDs, taken from tutorial
function guidGenerator() {
  function S4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4();
}


class Todo extends React.Component {

    // defining default parameters in ES6
    // constructor (descriptionText="", isDone=false, id=guidGenerator) {
    //     super();
    // }
    constructor(descriptionText, isDone, id) {
      super();
        this.descriptionText = descriptionText || '';
        this.isDone = isDone || false;
        this.id = id || guidGenerator();
    }
}

export default Todo;