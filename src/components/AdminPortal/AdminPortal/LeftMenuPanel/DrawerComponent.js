import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { isAuthorizedToPerform } from '../../../../utils.js';

const drawerWidth = 240;

// const useStyles = makeStyles({
//     list: {
//       width: 250
//     },
//     fullList: {
//       width: "auto"
//     }
//   });

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const DrawerComponent = (props) => {
    const theme = useTheme();

    const { open, handleDrawerClose } = props;
    const canAddNewUser = isAuthorizedToPerform("user", "canAddNewUser");
    const canAddCategory = isAuthorizedToPerform("product", "canAddCategory");

    

    const menuOptions2 = [
        // { menuLabel: 'Another Demo', routePath: 'demomenu2' }
        // { menuLabel: 'Starred', routePath: 'starred' },
        // { menuLabel: 'Send email', routePath: 'sendemail'},
        // { menuLabel: 'Drafts', routePath: 'drafts'}
    ]

    const menuOptions1 = [
        { menuLabel: 'Add User', routePath: 'adduser', disabled: !canAddNewUser }
        // { menuLabel: 'Starred', routePath: 'starred' },
        // { menuLabel: 'Send email', routePath: 'sendemail'},
        // { menuLabel: 'Drafts', routePath: 'drafts'}
    ]

    const [menuName, setMenuName] = React.useState(null);

    const mainMenuListArr = [
        {
            menuLabel: 'User Section',
            menuKey: 'usersectionmenukey',
            noLink: true,
        },
        {
            menuLabel: 'Product Category',
            menuKey: 'productcategorymenukey',
            noLink: true,
        }
    ];

    const subMenuListArr = {
        usersectionmenukey: [
            {
                menuLabel: 'Add User',
                menuKey: 'addusermenukey',
                routePath: 'adduser',
                disabled: !canAddNewUser
            }
            // {
            //     menuLabel: 'User Search',
            //     menuKey: 'usersearchmenukey'
            // }
        ],
        productcategorymenukey: [
            {
                menuLabel: 'Add Category',
                menuKey: 'addcategorymenukey',
                routePath: 'addcategory',
                disabled: !canAddCategory
            }
        ],
    };

    const innerList = anchor => {
        let arr = menuName ? subMenuListArr[menuName] : mainMenuListArr;
        const clickListener = text => {
            if (!menuName) {
                return setMenuName(text);
            } else {
                return alert(`${text} clicked`);
            }
        };
        return (
            <div
            >
                <List>
                    {arr.map((mnitem, index) => {

                        if (mnitem.noLink) {
                            return (
                                <ListItem button key={mnitem.menuKey} onClick={() => clickListener(mnitem.menuKey)}>
                                    <ListItemText primary={mnitem.menuLabel} />
                                    {!menuName && <ChevronRightIcon />}
                                </ListItem>
                            )
                        }

                        return (
                            <ListItem key={mnitem.menuKey} disablePadding className={mnitem.disabled ? 'disabled-link-li' : ''}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <Link className={mnitem.disabled ? 'disabled-link' : ''} to={mnitem.routePath}>{mnitem.menuLabel}</Link>
                                    {/* <ListItemText primary={item.menuLabel} /> */}
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    )}
                </List>
            </div>
        );
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {menuName && (
                <ListItem button onClick={() => setMenuName(null)}>
                    <ListItemText primary="Back" />
                    <ChevronLeftIcon />
                </ListItem>
            )}
            {innerList()}
            <List>
                {menuOptions2.map((item, index) => (
                    <ListItem key={item.menuLabel} disablePadding className={item.disabled ? 'disabled-link-li' : ''}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link className={item.disabled ? 'disabled-link' : ''} to={item.routePath}>{item.menuLabel}</Link>
                            {/* <ListItemText primary={item.menuLabel} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default DrawerComponent;