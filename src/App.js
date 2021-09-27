import { useEffect, useState, useParams } from "react";
// import JsonData from "./FPL_test.json";
import Input from "./component/input";


function App() {
  const [JsonData, setJsonData] = useState([]);
  const [formType, setFormType] = useState('');
  // const { id } = useParams();
  // console.log('id', id)

  const getData=(valueId)=>{
    setFormType(valueId)
    let url = '';
    switch (valueId) {
      case '53418ba3-159f-424d-8a66-ce494bae7e08':
        url = 'FPL_test.json'
        break;
      case '44d09af7-07e4-4da4-ba98-219676589136':
        url = 'TDZ_test.json'
      default:
        break;
    }
    fetch(`./${url}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setJsonData(myJson)
      }).catch(error=> {
        console.log('erro')
      })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <label className="form-label">Select form type</label>
      <select className="form-select" id="data" value={formType} onChange={(event)=> getData(event.target.value)}>
        <option value=''></option>
        <option value='53418ba3-159f-424d-8a66-ce494bae7e08'>FPL Form</option>
        <option value='44d09af7-07e4-4da4-ba98-219676589136'>Airspace Reservation</option>
      </select>
      {
        JsonData.length === 0 && <p>No data found</p>
      }
      <form>
        {
          JsonData?.sections && JsonData.sections.map((sectionFields, index) => {
            return sectionFields.fields.map((formField, index) => {
              return(<Input key={index} field={formField}/>)
            })
          })
        }
      </form>
    </div>
  );
}

export default App;
