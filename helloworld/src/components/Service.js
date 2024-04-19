import React,{ useState }  from 'react'
import FunctionForm from './FunctionForm'
import { MultiTable } from './MultiTable';
const Service= (props) => {
    console.log(props);
  const  tableData = [{
        "id": 1,
        "first_name": "Oren",
        "last_name": "Kirkup",
        "email": "okirkup0@mozilla.org",
        "gender": "Male",
        "ip_address": "222.121.246.220"
    }, {
        "id": 2,
        "first_name": "Cristiano",
        "last_name": "Setterfield",
        "email": "csetterfield1@feedburner.com",
        "gender": "Male",
        "ip_address": "181.240.14.59"
    }, {
        "id": 3,
        "first_name": "Rena",
        "last_name": "Ledley",
        "email": "rledley2@delicious.com",
        "gender": "Female",
        "ip_address": "120.35.202.72"
    }, {
        "id": 4,
        "first_name": "Norris",
        "last_name": "O' Dooley",
        "email": "nodooley3@senate.gov",
        "gender": "Agender",
        "ip_address": "120.238.230.63"
    }, {
        "id": 5,
        "first_name": "Monika",
        "last_name": "Ferriere",
        "email": "mferriere4@ezinearticles.com",
        "gender": "Female",
        "ip_address": "223.0.110.24"
    }, {
        "id": 6,
        "first_name": "Margarette",
        "last_name": "Pearcehouse",
        "email": "mpearcehouse5@cnbc.com",
        "gender": "Female",
        "ip_address": "214.34.159.89"
    }, {
        "id": 7,
        "first_name": "Margaret",
        "last_name": "Dougill",
        "email": "mdougill6@apple.com",
        "gender": "Female",
        "ip_address": "217.33.52.84"
    }, {
        "id": 8,
        "first_name": "Wilbur",
        "last_name": "Sinclair",
        "email": "wsinclair7@prlog.org",
        "gender": "Male",
        "ip_address": "65.249.175.250"
    }, {
        "id": 9,
        "first_name": "Archie",
        "last_name": "Sickamore",
        "email": "asickamore8@desdev.cn",
        "gender": "Male",
        "ip_address": "66.7.2.135"
    }, {
        "id": 10,
        "first_name": "Boycey",
        "last_name": "Pittet",
        "email": "bpittet9@wix.com",
        "gender": "Male",
        "ip_address": "209.5.225.86"
    }]
 const  tableList={}
 const [submittedData, setSubmittedData] = useState(null);
   
    const getData = (data) =>{
        console.log(data);
    submittedData=data
    }
    // return tableData
  return (
    
    <div>
              <FunctionForm onSubmit={getData}></FunctionForm>
              {<MultiTable formData={submittedData} /> }
              {/* {submittedData } */}
   
    </div>
  )
}

export default Service
