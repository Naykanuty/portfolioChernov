import { Container, Typography, Box, Paper, Grid, Avatar, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 4 }}>
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        sx={{ mb: 6 }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div variants={itemVariants}>
            <Avatar
              src="/photo.jpg"
              sx={{ 
                width: 250, 
                height: 250, 
                border: '4px solid #3f51b5',
                boxShadow: '0 10px 30px rgba(63, 81, 181, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 15px 40px rgba(63, 81, 181, 0.4)'
                }
              }}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={8}>
          <motion.div variants={itemVariants}>
            <Typography variant="h3" gutterBottom>
              Никита Чернов
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h5" color="primary" gutterBottom>
              Fullstack разработчик
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography paragraph>
              Привет! Мне 20 лет, я учусь на 3 курсе в Международном Институте Дизайна и Сервиса (МИДиС) 
              по направлению "Разработка веб и мобильных приложений". Специализируюсь на веб-разработке, создаю 
              современные и интерактивные приложения.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              <Chip label="C#" color="primary" />
              <Chip label="React" color="primary" />
              <Chip label="TypeScript" color="primary" />
              <Chip label="Node.js" color="primary" />
              <Chip label="SQL" color="primary" />
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={4} component={motion.div} variants={containerVariants}>
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <SchoolIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h5">Образование</Typography>
              </Box>
              <Box sx={{ pl: 6 }}>
                <Typography variant="h6" gutterBottom>
                  Международный институт дизайна и сервиса (МИДиС), Челябинск
                </Typography>
                <Typography paragraph sx={{ mb: 3 }}>
                  <strong>Направление:</strong> Разработка веб и мобильных приложений<br />
                  <strong>Годы обучения:</strong> 2023 - 2027<br />
                  <strong>Курс:</strong> 3 курс<br />
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <WorkIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h5">Опыт работы</Typography>
              </Box>
              <Box sx={{ pl: 6 }}>
                <Typography variant="h6" gutterBottom>
                  Стажер-разработчик в SoftLine
                </Typography>
                <Typography paragraph>
                  <strong>Период:</strong> Лето 2024<br />
                  <strong>Обязанности:</strong> Участие в разработке проектов компании<br />
                  <strong>Достижения:</strong> Познакомился с 4 проектами компании
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <CodeIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h5">Технические интересы</Typography>
              </Box>
              <Typography paragraph sx={{ pl: 6 }}>
                - Frontend разработка (React, TypeScript)<br />
                - Веб-дизайн и UI/UX<br />
                - Работа с базами данных (SQL, NoSQL)<br />
                - Разработка на C# (.NET Core)<br />
                - Оптимизация веб-приложений
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <GroupsIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
                <Typography variant="h5">Хакатоны и соревнования</Typography>
              </Box>
              <Typography paragraph sx={{ pl: 6 }}>
                <strong>ВК Мини-приложение "Лапки за любовь":</strong> Разработка функционала<br />
                <strong>Приложение "Практика и стажировка МИДиС":</strong> Разработка функционала<br />
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;