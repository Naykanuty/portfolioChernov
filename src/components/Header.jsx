import { AppBar, Toolbar, Typography, Button, Container, Box, Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolled ? 'rgba(30, 30, 30, 0.9)' : 'rgba(30, 30, 30, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: 'primary.light',
                }
              }}
            >
              Никита Чернов
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button 
                color="inherit" 
                component={Link} 
                to="/" 
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Главная
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/about"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Обо мне
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/projects"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Проекты
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/skills"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Навыки
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/contact"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Контакты
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;