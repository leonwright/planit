import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProfileMenuProps {
  imageSource: string;
  imageAlt: string;
}

const StyledProfileMenu = styled.div`
  color: pink;
`;

export function ProfileMenu(props: ProfileMenuProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    const logoutURL = '/api/auth/logout';
    router.push(logoutURL);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar alt={props.imageAlt} src={props.imageSource} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
