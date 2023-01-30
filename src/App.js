import "./App.css";
import { useEffect, useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
function PPagination() {
  const [items, setItems] = useState("");
  const [paginationItem, setPaginationItem] = useState([]);
  const [activeNo,setActiveNo]=useState(0)
  const[cv,setCv]=useState(1)
  let postsPerPage = 50;
  var getComments = async (currentValue) => {
   let vall=currentValue
   setCv(vall)
   setActiveNo(currentValue)
   if( currentValue === 0)
   {
    const res = await fetch(
      `https://api-staging.es-pal.org/portal_api/individual/?limit=${postsPerPage}&offset=0`
    );
    const data = await res.json();
    setItems(data);
   }
   else if(currentValue>1){
    const offset =currentValue* postsPerPage ;
    const res = await fetch(
      `https://api-staging.es-pal.org/portal_api/individual/?limit=${postsPerPage}&offset=${offset}`
    );
    const data = await res.json();
    setItems(data);
  };
   }
  useEffect(() => {
    var arr = [];
    for (let i = 1; i <= Math.ceil(261/ postsPerPage); i++) {
      arr.push(i);
    }
    arr.pop()
    setPaginationItem(arr);
   getComments(0)
  }, []);
const prev=()=>{
 getComments(cv-1)
}
const last=()=>{
  if(cv===1){
    getComments(cv+2)
  }
    getComments(cv+1)
}
  return (
    <div className="App">
      <h1>pagination</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>city</th>
            <th>contact no.</th>
          </tr>
        </thead>
        <tbody>
          {items?.results?.map((cv, indx) => {
            return (
              <tr key={indx}>postsPerPage
                <td>{cv.id}</td>
                <td>{cv.username}</td>
                <td>{cv.city}</td>
                <td>{cv.phone_number}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination className="d-flex justify-content-center">
         <Button onClick={prev} disabled={cv==0?true:false}>prev</Button>
        {paginationItem.map(function (currentValue, index, arr) {
          return (
          <Pagination.Item onClick={() => {  getComments(currentValue); }} active={activeNo===0 ||activeNo===1 ? currentValue===1 :currentValue=== activeNo}  key={index}>
            {currentValue}
           </Pagination.Item>
          );
        })}
        <Button onClick={last}   disabled={cv === paginationItem.length ? true : false}>Next</Button>
        <h2>page {cv===0?"1":cv} of {paginationItem.length}</h2>
      </Pagination>
    </div>
  );
}
export default PPagination;







