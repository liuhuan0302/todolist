const { useState, useEffect } = require("react");

function Form(){
  const [name,setName] = useState('Mary');

  useEffect(()=>{
    localStorage.setItem('formData',name);
  })

  const [surname, setSurname] = useState('Poppins');

  useEffect(()=>{
    document.title = name + ' ' + surname;
  })
  
  return (
    <div>121</div>
  )
}

export default Form;