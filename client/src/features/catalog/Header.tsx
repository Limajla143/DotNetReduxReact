import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, List, Switch, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return(
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display='flex' alignItems='center'> 
                <Typography variant='h6' component={NavLink} to='/' sx={navStyles}>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>
                
                <List sx={{display: 'flex'}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                            {title.toUpperCase()}
                            </ListItem>
                        ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton aria-label="cart">
                <Badge badgeContent={4} color='secondary'>
                    <ShoppingCart />
                </Badge>       
                </IconButton>              
                <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                 {title.toUpperCase()}
                            </ListItem>
                        ))}
                </List>
                </Box>
              
            </Toolbar>
        </AppBar>
    )
}

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
  