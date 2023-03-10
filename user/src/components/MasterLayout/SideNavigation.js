import React,{Fragment} from 'react';

import '../../asset/css/custom.css'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import { AiOutlineMenuUnfold,AiOutlineUser,AiOutlineLogout,AiOutlineEdit,AiOutlineCheckCircle } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { BsListNested,BsHourglass } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";


import sideNavLogo from '../../asset/image/sideNavLogo.png'

const SideNavigation = (props) => 
{

    var jubo = ()=>
    {
        var sideNav = document.querySelector('.side-nav');
        var myContent = document.querySelector('.my-content');
        var navLogo = document.querySelector('.nav-logo');
        
        console.log(sideNav)

        if(sideNav.classList.contains('side-nav-open'))
        {
            
            sideNav.classList.add('side-nav-close');
            sideNav.classList.remove('side-nav-open')

            myContent.classList.add('content-expand')
            myContent.classList.remove('content')

            navLogo.classList.add('nav-logo-close')
            navLogo.classList.remove('nav-logo-open')

        }
        else
        {
            sideNav.classList.remove('side-nav-close');
            sideNav.classList.add('side-nav-open')

            myContent.classList.add('content')
            myContent.classList.remove('content-expand')

            navLogo.classList.add('nav-logo-open')
            navLogo.classList.remove('nav-logo-close')


        }
    }




    return (
        <Fragment>
            <Navbar className='navigation-bg' fixed='top' collapseOnSelect expand="lg"  variant="dark">
                    <Container>
                            <Navbar.Brand className='navigation-brand' >
                                <span  className='nav-logo nav-logo-open' onClick={jubo} ><AiOutlineMenuUnfold/></span> <span className='navigation-brand-text'>Product Management</span> 
                            </Navbar.Brand>
                            
                           
                    </Container>
            </Navbar>


            <div className='side-nav-open side-nav'>
                <div className='side-nav-image-div'>
                    <img className='side-nav-image' src={sideNavLogo} />
                </div>
                
                <NavLink to='/' className={(p1) => p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item" }>
                    <span className='side-nav-icon'><RiDashboardLine/></span>  <span className='side-nav-text'>Product List</span>
                </NavLink>
               
            </div>

            <div className='content my-content'>
                {props.children}
            </div>

        </Fragment>
    );
};

export default SideNavigation;
