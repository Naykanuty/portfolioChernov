import { Container, Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 4 }}>
      <Grid 
        container 
        spacing={4} 
        alignItems="center"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" gutterBottom>
              Привет, я Никита Чернов
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Fullstack разработчик | Студент МИДиС Челябинск
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography paragraph>
              Специализируюсь на веб-разработке с использованием современных технологий.
              Учусь на 3 курсе в Международном институте дизайна и сервиса в Челябинске.
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/projects"
                startIcon={<CodeIcon />}
                sx={{ 
                  mr: 2,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 8px rgba(63, 81, 181, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Мои проекты
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/about"
                sx={{ 
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 8px rgba(63, 81, 181, 0.2)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Подробнее обо мне
              </Button>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ display: 'flex', justifyContent: 'center' }}
          component={motion.div}
          variants={itemVariants}
        >
          <Avatar
            src="/photo.jpg"
            sx={{ 
              width: 300, 
              height: 300, 
              border: '4px solid #3f51b5',
              boxShadow: '0 10px 30px rgba(63, 81, 181, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 15px 40px rgba(63, 81, 181, 0.4)'
              }
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;