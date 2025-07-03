import { Container, Typography, Grid, Chip, Box, LinearProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TerminalIcon from '@mui/icons-material/Terminal';
import { motion } from 'framer-motion';

const skills = {
  languages: [
    { name: 'C#', level: 60 },
    { name: 'JavaScript', level: 60 },
    { name: 'TypeScript', level: 70 },
  ],
  frontend: [
    { name: 'React', level: 70 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'Material-UI', level: 50 },
  ],
  backend: [
    { name: 'Node.js', level: 50 },
    { name: 'ASP.NET Core', level: 50 },
  ],
  databases: [
    { name: 'SQL (PostgreSQL, MySQL)', level: 50 },
    { name: 'Supabase', level: 50 },
  ],
  other: ['Git', 'Docker', 'REST API', 'WebSockets', 'Jest']
};

function SkillProgress({ name, level }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body1" gutterBottom>
        {name}
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={level} 
        sx={{ 
          height: 8, 
          borderRadius: 4,
          '& .MuiLinearProgress-bar': {
            backgroundColor: level > 75 ? '#4caf50' : level > 50 ? '#ff9800' : '#f44336',
            transition: 'width 1s ease-in-out'
          }
        }} 
      />
      <Typography variant="caption" color="text.secondary">
        {level}%
      </Typography>
    </Box>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Skills() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Мои навыки
      </Typography>
      
      <Typography 
        paragraph 
        sx={{ mb: 4 }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        За 3+ года программирования я освоил широкий спектр технологий. Вот мои основные компетенции:
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <TerminalIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
            <Typography variant="h5">Языки программирования</Typography>
          </Box>
          {skills.languages.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <SkillProgress name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <CodeIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
            <Typography variant="h5">Frontend</Typography>
          </Box>
          {skills.frontend.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <SkillProgress name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <DataObjectIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
            <Typography variant="h5">Backend</Typography>
          </Box>
          {skills.backend.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <SkillProgress name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <StorageIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
            <Typography variant="h5">Базы данных</Typography>
          </Box>
          {skills.databases.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <SkillProgress name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </Grid>
        
        <Grid item xs={12}>
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <DesignServicesIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
            <Typography variant="h5">Другие технологии и инструменты</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.other.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Chip 
                  label={skill} 
                  variant="outlined" 
                  sx={{ 
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'primary.contrastText',
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s ease'
                  }} 
                />
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Skills;