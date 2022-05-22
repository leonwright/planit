import { SvgIconProps } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface MenuItem {
  text: string;
  icon: React.ReactElement<SvgIconProps>;
  route: string;
}

export const MenuItems: MenuItem[] = [
  {
    text: 'Home',
    icon: <DashboardIcon />,
    route: '/',
  },
  {
    text: 'Tables',
    icon: <TableRestaurantIcon />,
    route: '/tables',
  },
  {
    text: 'Menus',
    icon: <MenuBookIcon />,
    route: '/menus',
  },
];
