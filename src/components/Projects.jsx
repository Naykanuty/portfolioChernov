import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Интернет-магазин",
    description: "Полнофункциональный магазин с корзиной, фильтрами и платежной системой",
    technologies: "React, Node.js, PostgreSQL",
    image: "/shop.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "Социальная сеть",
    description: "Платформа для общения с возможностью публикации постов",
    technologies: "React, Supabase",
    image: "/social.png",
    github: "#",
    demo: "#"
  },
  {
    title: "CRM система",
    description: "Система управления клиентами для малого бизнеса",
    technologies: "React, ASP.NET Core, SQL",
    image: "/crm.jpg",
    github: "#",
    demo: "#"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      <Typography 
        variant="h3" 
        gutterBottom
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Мои проекты
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            component={motion.div}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  <strong>Технологии:</strong> {project.technologies}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  href={project.github} 
                  target="_blank"
                  sx={{
                    '&:hover': {
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  GitHub
                </Button>
                <Button 
                  size="small" 
                  href={project.demo} 
                  target="_blank"
                  sx={{
                    '&:hover': {
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  Демо
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;