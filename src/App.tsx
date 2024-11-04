import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Button, Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { modules } from './data/modules';
import Tooltip from '@mui/material/Tooltip';
import { emptyModule } from './data/emptyModule';
// import { theme } from './theme/theme';
import { ModulePage } from './components/ModulePage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active module from URL
  const activeModule = location.pathname === '/'
    ? null
    : modules.findIndex(
      module => module.url === location.pathname
    );

  const handleModuleClick = (index: number) => {
    navigate(modules[index].url);
  };

  const handleNext = () => {
    if (activeModule !== null && activeModule < modules.length - 1) {
      navigate(modules[activeModule + 1].url);
    }
  };

  const handlePrevious = () => {
    if (activeModule !== null && activeModule > 0) {
      navigate(modules[activeModule - 1].url);
    }
  };

  return (
    <Container disableGutters maxWidth="lg" sx={{ py: 4}}>

      {/* Modules list of buttons */}
      <Paper elevation={0} sx={{ 
        p: { xs: 2, sm: 4 },
        mb: { xs: 2, sm: 4 },
      }}>
        <Box
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
            xs: 'repeat(14, 1fr)', // All columns on mobile with horizontal scroll
            sm: 'repeat(14, 1fr)', // 14 columns on tablet
            md: 'repeat(14, 1fr)', // 14 columns on smaller desktop
            lg: 'repeat(14, 1fr)', // 14 columns on large desktop
          },
          gap: 1,
          mb: 3,
          justifyItems: 'center',
          alignItems: 'center',
          overflowX: { xs: 'auto', sm: 'auto', md: 'auto' }, // Enable horizontal scroll on mobile, tablet and smaller desktop
          width: { xs: 'calc(100vw - 64px)', sm: '100%' }, // Account for container padding on mobile
         }}>
          {modules.map((module, index) => (
            <Tooltip title={module.name} key={module.id}
              arrow
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.secondary.contrastText,
                    borderRadius: '12px',
                    fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' }
                  }
                },
                arrow: {
                  sx: {
                    color: (theme) => theme.palette.primary.main,
                  }
                }
              }}
            >
              <Button
                onClick={() => handleModuleClick(index)}
                sx={{
                  p: 0,
                  height: '60px',
                  width: '50px',
                  border: activeModule === index ? 'none' : '1px solid #e0e0e0',
                  bgcolor: activeModule === index ? (theme) => theme.palette.secondary.main : 'transparent',
                }}
              >
                <img
                  src={module.image}
                  alt={module.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Button>
            </Tooltip>
          ))}
        </Box>

        {/* next buttons */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          mb: 8,
          flexDirection: { xs: 'row'},
          gap: { xs: 2, sm: 0 }
         }}>
          <Button
            variant='outlined'
            startIcon={<ArrowBackIcon />}
            color='secondary'
            onClick={handlePrevious}
            disabled={activeModule === null || activeModule === 0}
          >
            Anterior
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            endIcon={<ArrowForwardIcon />}
            onClick={handleNext}
            disabled={activeModule === null || activeModule === modules.length - 1}
          >
            Siguiente
          </Button>
        </Box>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            // Your existing home page content
            <HomeContent />
          } />
          <Route path=":moduleUrl" element={<ModulePage />} />
        </Routes>
      </Paper>    
    </Container>
  );
}


function HomeContent() {
  return (
    // Your existing home page JSX
    // (the content that shows when activeModule === null)
    <>
      <Grid container spacing={2} sx={{
        minHeight: { xs: 'auto', md: '50vh' },
      }}>
        {/* Left side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{
            mb: { xs: 0, md: 0 },
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row', lg: 'column' },
            alignItems: { xs: 'center', md: 'center', lg: 'flex-start' },
            // justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
            gap: { xs: 2, md: 2, lg: 0 },
          }}>

            <Box>
              <Typography variant="h4" gutterBottom 
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  mb: 2
                }}
              >
                Llega tan lejos como tú quieras con el sistema ERP Microsip
              </Typography>
              <Typography color='text.secondary' sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.5,
                letterSpacing: '0.015em'
              }}
              >
                Selecciona un módulo para ver más información
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Paper variant='outlined' sx={{ p: 4, bgcolor: '#e5e5e5' }}
            >
              <Typography
                dangerouslySetInnerHTML={{ __html: emptyModule.brief }}
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  mb: 4,
                  fontWeight: 500
                }}
              />

              {emptyModule.benefits.map((benefit, index) => (
                <Box
                  className='benefits-and-links'
                  key={index}
                  sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'flex-start' }}
                >
                  <Box
                    sx={{
                      bgcolor: (theme) => theme.palette.secondary.main,
                      color: (theme) => theme.palette.secondary.contrastText,
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: benefit }}
                    sx={{
                      flex: 1,
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                      lineHeight: 1.6,
                      letterSpacing: '0.01em'
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </Box>
        </Grid>
      </Grid> 
    </>
  );
}

export default App;
