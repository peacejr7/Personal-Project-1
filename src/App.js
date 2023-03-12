import './App.css';

function App() {
  return (
    <div className="App">
    <nav className=" flex justify-between h-[50px]">
      <div className='pl-4 pt-4'>
        <img src='https://www.bluehost.com/content/experience-fragments/bluehost/site-header/affiliate-site-header/_jcr_content/root/header/logo.coreimg.svg/1666263506650/bluehost-logo.svg' alt='#'/>
      </div>
      <div className='pt-4 '>
        <ul className='flex text-lg'>
          <li className='mr-6'><a href='#'>Pricing & Plans</a></li>
          <li className='mr-6 '><a href='#'>Contacts</a></li>
          <li className='mr-6'><a href='#'>Login</a></li>
          <li className='mr-6'><a href='#'>USD</a></li>
        </ul>
      </div>
    </nav>
    <div className='body '>
    <section className='flex justify-between bg-[#84C0FC] '>
      <div className='block pl-[30px] pt-11 '>
     <h1 className='text-white font-extrabold text-7xl font-mono'>The Best Web <br/> Hosting </h1>
     <ul className='pl-11 '>
         <li className='list-disc py-1'><u>Free</u> <b>Domain for 1st Year</b></li>
         <li className='list-disc py-1'><u>Free</u> <b>SSL Certificate Included</b></li>
         <li className='list-disc py-1'>1-Click <b>WordPress Install</b></li>
         <li className='list-disc py-1'>Expert 24/7 <b>Support</b></li>
         <li className='list-disc py-1'>Secure <b>reliable hosting</b></li>
     </ul>
     <h1 className='text-3xl font-bold py-1'>
      starting at $9.99
     </h1>
     <h1 className='text-3xl font-bold py-1'>
      $2.95 12/month
     </h1>
     <button type="button" class="text-white bg-[#03243B] hover:shadow pb-[2rem] py-6 px-[6rem]  " >
     <a className='font-bold' href='#'>Get started Now</a>
     </button>
      </div>
      <div className=' w-[50%] pt-5 pb-5'>
     <img src='https://www.bluehost.com/special/homenew/_jcr_content/responsivegrid/section_copy_copy_co/hero.coreimg.jpeg/1678300792453/affiliate-hero-image.jpeg' alt='#'/>
      </div>
    </section>
<section className='grid-cols-1 pb-20'>
<div className=' block pt-16'>
 <div className='flex lg:flex justify-between'>
  <img className='w-[80] pl-40' src='https://www.bluehost.com/special/homenew/_jcr_content/responsivegrid/section_copy_copy/responsivecolumns/column-0/image.coreimg.jpeg/1673628432621/wp-logo-black.jpeg' alt='#'/>
  <img className='px-10 ' src='https://www.bluehost.com/special/homenew/_jcr_content/responsivegrid/section_copy_copy/responsivecolumns/column-1/image_copy.coreimg.svg/1673628444004/plus-sign-black.svg' alt='#'/>
  <img className='w-[80] pr-40' src='https://www.bluehost.com/special/homenew/_jcr_content/responsivegrid/section_copy_copy/responsivecolumns/column-2/image_copy.coreimg.png/1673628463079/bluehost.png' alt='#'/>
 </div>
 <div className='pt-11'>
 <h1 className='text-gray-600 font-bold text-3xl text-center pt-7'>Powering over 2 Million Websites </h1>
  <h1 className='text-black font-bold text-3xl text-center pt-16'>All Plans include </h1>
 </div>
  <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 pt-20'>
    <div className='pl-10 '>
    <h1 className='text-2xl font-bold'>Tools To Grow</h1>
    <p>Whether you start small or migrate an existing <br/> website, Bluehost provides all the tools you need <br/> to build an audience, sell online, or grow your business</p>
    </div>
    <div>
    <h1 className='text-2xl font-bold'>Domain Manager1</h1>
    <p>Our domain manager makes it easy to update,<br/> transfer, purchase and manage your domains in <br/> one place</p>
    </div>
    <div>
    <h1 className='text-2xl font-bold'>SSL Certificates</h1>
    <p>Keep personal information, e-commerce <br/>transactions and other sensitive data <br/>safeguarded with encrypted connections.</p>
    </div>
  </div>
  <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 pt-20 pl-72'>
    <div>
    <h1 className='text-2xl font-bold'>Reliable Performance</h1>
    <p>All Bluehost plans are designed for WordPress <br/>excellence. Each plan includes the right mix of<br/> technology under the hood to keep your <br/> website content fast and available for your <br/>visitors.</p>
    </div>
    <div>
    <h1 className='text-2xl font-bold'>Google My Business</h1>
    <p>List your local business online, including its location<br/> and hours of operation, to quickly <br/>connect with customers in your area</p>
    </div>
  </div>
</div>
</section>
 <section className='flex justify-between bg-[#84C0FC] '>
      <div className='block pl-[30px] pt-20'>
     <h1 className='py-2 text-2xl'>SUPPORT & GUIDANCE</h1>
     <h1 className='py-2 text-5xl font-extrabold'>24/7 eCommerce Support</h1>
     <p className='py-2'>Bluehost supports millions of websites worldwide.<br />
Let our experts help you effectively build, grow and manage your WordPress website.</p>
    <h1 className='text-4xl font-bold py-2'>Call <u>888-401-4678</u> or <u>Chat Now.</u></h1>
    <p className='text-sm'>International calling fees my apply</p>
      </div>
      <div className=' w-[50%] items-right pt-14 pl-[150px]'>
     <img src='https://www.bluehost.com/special/homenew/_jcr_content/responsivegrid/section_2111600373_c/responsivecolumns/column-1/image.coreimg.svg/1666263571920/support-desktop.svg' alt='#'/>
      </div>
    </section>
    </div>
    <section className='grid-cols-1 pb-20 bg-[#0A476E]'>
    <div className='pt-[100px]'>
    <h1 className='text-white text-5xl font-bold text-center'>Your website will love it Here</h1>
    <h1 className='text-blue-500 text-xl  text-center pt-[50px]'>Join the millions of happy websites powered by Bluehost.</h1>
    <div className='flex justify-center pt-[50px]'> <button class="bg-blue-500 hover:bg-[#163e57] text-white font-bold py-6 px-20 rounded text-center">
  Pick A Plan
</button></div>
   <div className='flex justify-between pt-[70px]'>
   <div>
   <p> *The promotional price is for the first term only and renews at the <span className="text-blue-500"> regular rate</span></p>
   </div>
   <div className='pr-4'>
  <a href='#' className='text-blue-500 text-lg font-bold '>Back to Top ↑ </a>
   </div>
   
   </div>
    </div>
        
        
</section>

  

<footer className='flex text-white bg-[#314664] justify-between h-14 mb-0 '>
<img className='h-[50px] w-[50px] pl-1 pb-2 static' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSVIRH1XtGQ3YIpygDiJoqodX7LTuDl0BhF-CnWc414Is-wCBM'/>
<div className='pt-4'>
<p>© 2002-2022 Bluehost Inc. All Rights Reserved.</p>
</div>
<ul className='flex pt-4'>
    <li className='mr-9'>
        <div >
            
            <a  href="https://www.bluehost.com/terms/user-agreement" >
                Terms of Service 
            </a>
        </div>
    </li>
    <li className='mr-9'>
        <div >
            
            <a  href="https://newfold.com/privacy-center" >
                Privacy Policy 
            </a>
    
        </div>
   
    </li>
    <li className='mr-9'>
        <div >
            <a   href="#" >
                Cookie Settings 
            </a>
   
        </div>   
    </li>
    <li className='mr-9'>

        <div>
            <a  href="https://newfold.com/privacy-center/addendum-for-california-users" >
          Do Not Sell My Personal Information 
            </a>
        </div>
    </li>
</ul>
</footer>
      
    </div>
  );
}

export default App;
