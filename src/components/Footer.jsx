import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            © {new Date().getFullYear()} Никита Чернов
          </Typography>
          <Box>
            <IconButton href="https://github.com/naykanuty" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://t.me/naykanuty" target="_blank">
              <TelegramIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Студент МИДиС, Fullstack разработчик
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;