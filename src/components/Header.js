import NavBar from "./NavBar";

const Header = ()=>(
     < header id="header" className="d-flex align-items-center" >
     <div className="container d-flex justify-content-between align-items-center">

       <div className="logo">
         <h1><a href="index.html">Huila</a></h1>
         {/* <!--Uncomment below if you prefer to use an image logo --> */}
         {/* <!--<a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
       </div>
       <NavBar />
     </div>
   </header >
)
export default Header;