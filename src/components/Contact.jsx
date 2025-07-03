import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Grid, 
  Paper,
  Divider,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Имя обязательно';
        if (value.length < 2) return 'Имя слишком короткое';
        return '';
      case 'email':
        if (!value.trim()) return 'Email обязателен';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Некорректный email';
        return '';
      case 'message':
        if (!value.trim()) return 'Сообщение обязательно';
        if (value.length < 10) return 'Сообщение слишком короткое';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Валидация при изменении (можно убрать, если хотите валидацию только при submit)
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет реальная отправка на сервер
      console.log('Отправка данных:', formData);
      
      // Имитация отправки
      setTimeout(() => {
        setSnackbarMessage('Сообщение успешно отправлено!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        
        // Очистка формы
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
    } else {
      setSnackbarMessage('Пожалуйста, исправьте ошибки в форме');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 12 }}>
      <Typography variant="h3" gutterBottom>
        Контакты
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Напишите мне
            </Typography>
            
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
                required
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
                required
              />
              
              <TextField
                fullWidth
                label="Сообщение"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ mb: 3 }}
                required
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                fullWidth
                disabled={!formData.name || !formData.email || !formData.message}
              >
                Отправить сообщение
              </Button>
            </form>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Контактная информация
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>naykanuty@gmail.com</Typography>
              </Box>
              
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>+7 (904) 940-70-50</Typography>
              </Box>
              
              <Box display="flex" alignItems="center" mb={2}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography>Челябинск, Россия</Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>
              Я в соцсетях
            </Typography>
            
            <Box>
              <IconButton 
                href="https://t.me/nikita_chernov" 
                target="_blank"
                aria-label="Telegram"
              >
                <TelegramIcon fontSize="large" />
              </IconButton>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="body2" color="text.secondary">
              Обычно отвечаю в течение 1-2 рабочих дней. Для срочных вопросов лучше написать в Telegram.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;