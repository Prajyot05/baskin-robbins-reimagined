import React from 'react'

function Footer() {
    const scrollToSection = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='footer-container bg-pink-500'>
        <div className='footer overflow-x-hidden relative flex justify-center gap-20 -ml-48 pt-40 items-center text-white min-h-[80vh]'>
            <div className="footer-left text-[2rem]">
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>Our Stores</h4>
                <h4>Blogs</h4>
            </div>
            <div className="footer-right">
                <h4 className='text-[1.5rem] pb-3'>Subscribe to news letter</h4>
                <div className="footer-input">
                    <input className='bg-slate-50 bg-opacity-70 px-5 py-2 text-black outline-none' placeholder='e-mail address' type="text" />
                    <button className={`bg-pink-400 hover:bg-pink-500 text-white py-2 px-3 -ml-5`}>Submit</button>
                </div>
            </div>
            <div className="footer-bottom text-white absolute bottom-2 w-[170vh] flex justify-between ml-[20vh]">
                <h4 className='left-0'>Copyright | Baskins Robbins India</h4>
                <h4 className='right-0' onClick={() => scrollToSection('.navbar')}>Sitemap</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer