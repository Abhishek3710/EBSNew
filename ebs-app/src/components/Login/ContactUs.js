//  import React,{Component} from 'react';
// import Email from '../../images/Email.png';

// export class ContactUs extends Component{


// const ContactUs = () => {
//  render(){
// return (
//      <div className="container">
//        <div className="py-4">
//          <h1>Contact US</h1>
//          <div>
//            <img src={logo} alt="My logo" />
//                 <div className='image'>
//                 {/* <img src={Email} alt="My logo/> */}
//               </div>
//           </div>
//         </div>
//       </div>
//            {/* <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//              <input 
//                type="email"
//               class="form-control"
//                id="exampleInputEmail1"
//                aria-describedby="emailHelp"
//             />
//              <small id="emailHelp" class="form-text text-muted">
//               We'll never share your email with anyone else.
//              </small>
//            </div>
//            <div class="form-group">
//              <label for="exampleInputPassword1">Password</label>
//              <input
//                type="password"
//                class="form-control"
//                id="exampleInputPassword1"
//             />
//            </div>
//            <div class="form-group form-check">
//              <input
//                type="checkbox"
//               class="form-check-input"
//                id="exampleCheck1"
//              />
//              <label class="form-check-label" for="exampleCheck1">
//                Check me out
//              </label>
//           </div>
//           <button type="submit" class="btn btn-primary">
//              Submit
//            </button> */}
        
// )
//           }
          
//  export default ContactUs;


import React,{Component} from 'react';
//import AboutUs from '../../images/AboutUs.PNG';

export class ContactUs extends Component{

    render(){
        return(
          <div>
          <div className='header' style={{ color: 'red'}}><br/>
            <h3><b>Contact No:-</b></h3></div>

              <h4><b>Centralized Customer Care</b></h4>
                <b>1800-102-3435<br/>
                   1800-233-3435</b>     
            
            <h4><b>HT Consumer Helpdes</b></h4>
             <b>022-26478989<br/>
                022-26478899</b>
                        
            <h4><b>Online Payment Helpdesk</b></h4>
            <b>022-26478246 <br/>
               022-26473486</b>
            <br/><br/>

            <div className='header' style={{ color: 'green'}}>    
            <h3><b>Contact Email:-</b></h3>
            </div>

              <div className='header' style={{ color: 'blue'}}>
                <h5> customercare@mahadiscom.in<br/>
                     htconsumer@mahadiscom.in<br/>
                     helpdesk_pg@mahadiscom.in<br/>
                     support_etender@mahadiscom.in<br/>
                  </h5>
              </div>                                                                                 
          </div> 
        )
    }
}