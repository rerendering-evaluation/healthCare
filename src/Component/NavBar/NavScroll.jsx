import React from 'react'
import { useEffect, useState } from 'react';
import {Box} from '@mui/material'

import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

const NavScroll = ({headContents}) => {


//All in One - nav drop
const[menuItems,setMenuItems]=React.useState(headContents)


const handledropdown = (index) => {
    let menuObj = menuItems[index - 1]
      
    if (menuObj.expand == false){
      menuObj.expand = true;
    } else {
      menuObj.expand = false;
    }

    let newArray = [...menuItems]
      newArray[index -1] = menuObj
      setMenuItems(newArray)

}


const handledropdown1 = (index1 , index2) => {
  let menuObj = menuItems[index2 - 1].subMenus[index1 -1] 
  if (menuObj.sExpand == false){
    menuObj.sExpand = true;
  } else {
    menuObj.sExpand = false;
  } 
    let newArray = [...menuItems]
    newArray[index2 - 1].subMenus[index1 -1] = menuObj
    setMenuItems(newArray)
}

// 

  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  
    const handleClose =()=> setNav(!nav)


    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      // 
      <Box className='shadow-inner z-50'>
      <div className='  mx-auto justify-center w-[100%] z-50 shadow-2xl'>
        <div
          className={classNames(
            isVisible ? 'w-[100%]  fixed mx-auto justify-center z-50  transition ease-in-out delay-200 duration-300 ' : '  w-[100%] z-50 shadow-9xl ','z-50 top-0 w-full'
          )}
        >
            {/*  */}
            <div className='lg:w-[100%] w-[100%] h-[80px] z-50  drop-shadow-lg justify-center mx-auto items-center  sm:pr-0 bg-white'>
              <div className=' flex justify-between items-center lg:w-[80%] w-[86%] h-full mx-auto z-50'>
                <div className='flex items-center'>
                  <h1 className='text-3xl font-bold mr-4 sm:text-3xl text-cyan-400 shadow-2xl'>Health Care</h1>
                </div>
                {/* nav full contents */}
                
                <div className='hidden lg:flex lg:space-x-6 justify-between z-50'>
                    { menuItems.map((item, index)=>{
                        return(
                            <div key={index}>
                                {
                                  item.subMenus ? (
                                    // Yes submenus
                                    <div >

                                        <div className="py-10">
                                            <div className="dropdown inline-block relative group">
                                                <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                                  <span className="mr-1">{item.head}</span>
                                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                                                </button>
                                                <ul className="dropdown-menu group-hover:block absolute hidden text-gray-700 bg-white pt-1 w-[175%] z-50">
                                                      {/* iterate submenus*/}
                                                        {item.subMenus && item.subMenus.map((smenu, indexf)=>{
                                                          return(
                                                            <div key={indexf}>
                                                                {/* check if subSubmenus */}
                                                                {
                                                                  smenu.subSubMenu ? (
                                                                      <div  >
                                                                        {/* Yes subSubMenus - display submenu items  */}
                                                                        <li  className="rounded-sm relative px-3 py-1 hover:bg-gray-100 haveFun">
                                                                            <button
                                                                              className="w-full text-left flex items-center outline-none focus:outline-none"
                                                                            >
                                                                              <span className="pr-1 flex-1">{smenu.subHead}</span>
                                                                              <span className="mr-auto">
                                                                                <svg
                                                                                  className="fill-current h-4 w-4
                                                                                  transition duration-150 ease-in-out"
                                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                                  viewBox="0 0 20 20"
                                                                                >
                                                                                  <path
                                                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                                                  />
                                                                                </svg>
                                                                              </span>
                                                                            </button>
                                                                            <ul className="bg-white border rounded-sm absolute top-0 left-0 
                                                                          transition duration-150 ease-in-out origin-top-right w-[80%]">
                                                                                {smenu.subSubMenu && smenu.subSubMenu.map((sSmenu , indexS)=>{
                                                                                  return(
                                                                                    <div key={indexS}>
                                                                                        <li  className="px-3 py-1 hover:bg-gray-100">{sSmenu.subSubName}</li>
                                                                                    </div>
                                                                                )})}
                                                                            </ul>
                                                                          </li>
                                                                      </div>
                                                                  ):(
                                                                      <div>
                                                                        {/* No subSubMenus - display submenu items  */}
                                                                        
                                                                        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600">
                                                                          <NavLink to={smenu.routerLink}  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'inactive')}>{smenu.subHead}</NavLink>
                                                                        </li>
                                                                        {/* <li  className="">
                                                                            <a className="rounded-t   py-2 px-4 block whitespace-no-wrap
                                                                                    hover:translate-x-2 hover:text-[#207EF7] transition ease-in-out delay-200 duration-300
                                                                                              " href="#">
                                                                                                {smenu.subHead}
                                                                            </a>
                                                                        </li> */}
                                                                      </div>
                                                                  )
                                                                }
                                                            </div>
                                                              
                                                          )}
                                                      )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                  ):(
                                    // no submenus display head
                                    <div>
                                        <div className="py-10">
                                            <div className="dropdown inline-block relative group">
                                              <div className=" underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600 font-semibold tracking-wide text-base">
                                                  <NavLink to={item.routerLink}  className={({ isActive }) => (isActive ? 'text-cyan-500' : 'text-black')}>{item.head}</NavLink>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                  )
                                }

                                    
                          </div>
                          
                          )})}
                </div>
                    
                
                {/* nav full contents */}


                {/* <div className='hidden lg:flex '>
                  <button className='border-none bg-[#07092B] py-3 px-4 rounded-xl text-white '>
                    Get A Quote
                  </button>
                  
                </div> */}
{/* mobile view */}
                <div className='lg:hidden z-50' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                  
                </div>
              </div>
      
              <ul className={!nav ? 'hidden' : 'flex flex-col bg-white w-[100%] sm:w-[75%] px-8 lg:hidden overflow-y-scroll overflow-x-hidden mx-auto h-fit max-h-[500%] z-50 '}>
                  { menuItems.map((item, indexT)=>{
                    return(
                        <div key={indexT} className='z-50'> 
                          {/* only head */}
                            {
                              item.subMenus ? (
                                <div  >
                                    <li  onClick={() =>handledropdown(item.id)} className='py-2  border-b border-zinc-200 w-full flex flex-row justify-between items-center '>
                                      {item.head}
                      {/*  */}
                                            <div className='flex transform delay-500 duration-500'>

                                            {/*  */}
                                            {
                                              item.expand ===false ?(
                                            <PlusIcon className='w-4 transform delay-500 duration-500  text-zinc-600 ' />
                                              ):(
                                                <div><MinusIcon className='w-4 text-zinc-600  transform delay-500 duration-500'  /></div>
                                              )
                                            }
                                            </div>
                                    </li>
                                  {/* head inner contents */}
                                  {
                                    item.expand === true ?(
                                      <div className=''>
                                        <ul className=' bg-white pl-8 lg:hidden w-[96%] z-50'>

                                        {item.subMenus && item.subMenus.map((smenu,sindex)=>{
                                            return(
                                              <div key={sindex}>
                                                {
                                                  // inside inner contents
                                                  smenu.subSubMenu ? (
                                                    <div >
                                                      <li  onClick={() =>handledropdown1(smenu.subid,item.id)} className='py-2  border-b border-zinc-200 w-full flex flex-row justify-between items-center '>
                                                      {smenu.subHead}
                      {/*  */}
                                                      <div className='flex transform delay-500 duration-500'>

                                                      {
                                                        smenu.sExpand ===false ?(
                                                      <PlusIcon className='w-4 transform delay-500 duration-500  text-zinc-600 ' />
                                                        ):(
                                                          <div><MinusIcon className='w-4 text-zinc-600  transform delay-500 duration-500'  /></div>
                                                        )
                                                      }
                                                      </div>
                                                    </li>


                                                    {
                                                      smenu.sExpand === true ? (
                                                        <div>
                                                          <ul className=' bg-white pl-8 lg:hidden'>
                                                            {smenu.subSubMenu && smenu.subSubMenu.map((sSubmenu,smindex)=>{
                                                            return(
                                                              <div key={smindex}>
                                                                  <li  onClick={handleClose} className='py-2     border-b border-zinc-200 w-full'>{sSubmenu.subSubName}</li>
                                                              </div>
                                                            )})
                                                            }
                                                          </ul>
                                                        </div>
                                                      ):(
                                                        <div>
                                                            {/* remain empty */}
                                                        </div>
                                                      )

                                                    }
                                                    </div>
                                                  ):(
                                                  <li onClick={handleClose} className='py-2     border-b border-zinc-200 w-full'>{smenu.subHead}</li>
                                                  )
                                                }
                                              </div>
                                              
                                            )}
                                        )}
                                        </ul>
                                      </div>
                                    ):(
                                      <div>
                                        
                                      </div>
                                    )
                                  }
                                    
                                </div>
                              ):(
                                <>
                                <div className='py-2 flex border-b border-zinc-200 w-full'>
                                      <NavLink to={item.routerLink} onClick={handleClose} className={({ isActive }) => (isActive ? 'text-blue-800' : 'text-black')}>{item.head}</NavLink>
                                </div>
                                </>
                              )
                            }
                        </div>
                      // end
                      )
                        }
                      )
                    }
                  
                 
                {/* <div className='flex flex-col my-4'>
                    <button className='text-white bg-[#07092B] px-4 py-3 mb-4'>
                      Sign In
                    </button>
                </div> */}
              </ul>


          </div>
          {/*  */}
        </div>
      </div>
      </Box>
    );
}

export default NavScroll

// 


