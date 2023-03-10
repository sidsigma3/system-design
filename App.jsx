import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css'
import axios from 'axios'

function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
        setShow(true)
        setShow1(false)              
  };


  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setShow1(true)
    setShow(false)
  };


  const [user,setUser] = useState({
    email:'',
    password:''
  })

  const changeHandler=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }
 
  const submitHandler= (e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/signup",user)
    .then(res=>console.log('yo'))

    setUser({email:"",password:""})

  }

  return (
<body>
	<header>
		<h1>Logo</h1>
		<nav>
			<ul>
				{/* <li><a href="#">Home</a></li>
				<li><a href="#">Dashboard</a></li>
				<li><a href="#">Order</a></li>
                <li><a href="#">System Trading</a></li>
                <li><a href="#">User</a></li> */}
        <li><Button variant="primary" onClick={handleShow1}>
         Sign Up
      </Button>

        <Modal show={show1} onHide={handleClose1}>
         <Modal.Header closeButton>
           <Modal.Title>SignUp Form </Modal.Title>
         </Modal.Header>
        <Modal.Body></Modal.Body>

        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={changeHandler}></input>
           <label for="floatingInput">Full name</label>
         </div>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={changeHandler}></input>
           <label for="floatingInput">User Name</label>
        </div>


        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={changeHandler}></input>
           <label for="floatingInput">Email address</label>
         </div>

         <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='phoneNumber' onChange={changeHandler}></input>
           <label for="floatingInput">Phone Number</label>
         </div>

         <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={changeHandler}></input>
           <label for="floatingPassword">Password</label>
         </div>

         <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={changeHandler}></input>
           <label for="floatingInput">Confirm Password</label>
         </div>
       
        <Modal.Footer>
           <Button variant="secondary" onClick={handleClose1}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose1}>
             Submit
           </Button>
         </Modal.Footer>
      </Modal></li>
			
      <Button variant="primary" onClick={handleShow}>
         Login
       </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Login Form </Modal.Title>
         </Modal.Header>
         <Modal.Body></Modal.Body>
         <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={changeHandler}></input>
           <label for="floatingInput">Email address</label>
         </div>
         <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={changeHandler}></input>
          <label for="floatingPassword">Password</label>
        </div>
       <a href='#'>Forgot password?</a>
         <button onClick={handleShow1}>New User</button>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Submit
           </Button>
         </Modal.Footer>
       </Modal>
      </ul>
		</nav>
	</header>
	<main>
		<section>
			<h2>Quoets with Word Cloud</h2>
			<p>-NIFTY and BANKNIFTY (Live Stock Information)
                - ADs
                - News related to traning  </p>
		</section>
        <section>
			<h2>Why us?</h2>
			<ul>
				<li>Ease of trading</li>
				<li>Risk management</li>
				<li>Geek indicator</li>
			</ul>
			
		</section>
        <section>
			<h2>How we help You</h2>
			<ul>
				<li>System Trading</li>
				<li>Indicator</li>
				<li>Report</li>
			</ul>
		</section>
		<section>
			<h2>Who we are</h2>
			<ul>
				<li>About us (About the product , It's features[few lines summary])</li>
				<li>Social Media Link</li>
				<li>24/7 customer support</li>
			</ul>
		</section>
	</main>
	<footer>
		<p>&copy; 2023 Trade India</p>
	</footer>
</body>



  );
}

export default App
