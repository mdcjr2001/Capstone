import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './sidebar.css'

export default function Sidebar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>SportsCentral</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* <MDBNavbarItem> */}
              {/* <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink> */}
            {/* </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href='/Home'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Profile'>Profile</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/CreatePosts'>Create a Post</MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='/Settings'>Settings</MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href='/Messages'>Messages</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/#'>Log Out</MDBNavbarLink>
            </MDBNavbarItem>



            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Feeds
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link href='/NBA'>NBA</MDBDropdownItem>
                <MDBDropdownItem link href='/NFL'>NFL</MDBDropdownItem>
                <MDBDropdownItem link href='/UFC'>UFC</MDBDropdownItem>
                <MDBDropdownItem link href='/CBB'>CBB</MDBDropdownItem>
                <MDBDropdownItem link href='/CFB'>CFB</MDBDropdownItem>
                <MDBDropdownItem link href='/WCBB'>WCBB</MDBDropdownItem>
                <MDBDropdownItem link href='/WNBA'>WNBA</MDBDropdownItem>




                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* <MDBNavbarItem> */}
              {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
            {/* </MDBNavbarItem> */}
          </MDBNavbarNav>

          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
