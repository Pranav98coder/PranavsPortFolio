// const Connect = () => {
//     return ( 
//         <div id="connect">
//             
//         </div>
//      );
// }
 
// export default Connect;
import "./Connect.css";

import {useState} from "react";
export default function Send() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3631e273-71a2-457f-b5d3-5a8a5e4f9294");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        alert("Error");
        setResult(data.message);
      }
    };
  
    return (
      <div id="send">
        <h1 id="chead">Contact Form:</h1>
        <p className="ct">Enter these details to directly send an email to me:</p>
        <form onSubmit={onSubmit}>
           <span>Name:</span><input type="text" placeholder="Enter your name"></input>
           <br/>
           <span>Email:</span><input type="text" placeholder="Enter your email"></input>
           <br/>
           <span id="mess">Message:</span><textarea placeholder="Enter your message"></textarea>
           <br/>
           <button Onclick="()=>{">Submit</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }