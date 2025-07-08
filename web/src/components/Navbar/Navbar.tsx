import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useMovieContext } from '../../contexts/MovieContext';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { searchQuery, setSearchQuery } = useMovieContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isDetailsPage = /^\/movie\//.test(location.pathname);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        {isMobile && onMenuClick && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <div className="navbar-logo-col">
          <img src={logo} alt="3035 Filmes" className="navbar-logo" />
        </div>

        <div className="navbar-title-col">
          <h1 className="navbar-title">3035 Filmes</h1>
        </div>

        <div className="navbar-search-col">
          {!isDetailsPage && (
            <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: { xs: 1, md: 0 } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar filmes..."
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </Search>
            </Box>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
