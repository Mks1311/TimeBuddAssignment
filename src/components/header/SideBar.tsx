import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

interface SideBarProps{
    NavList:string[]
}
export default function SideBar({NavList}:SideBarProps) {
    const [open, setOpen] = useState(false);

    const toggleDrawer =() => {
        setOpen(!open);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List>
                {NavList.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {open ? (
                <div onClick={toggleDrawer}>
                    <IoClose />
                </div>
            ) : (

                <div onClick={toggleDrawer} className='text-2xl'>
                    <IoMenu />
                </div>
            )}
            <Drawer open={open} onClose={toggleDrawer} anchor='right' className='backdrop-blur-sm '>
                {DrawerList}
            </Drawer>
        </>
    );
}
