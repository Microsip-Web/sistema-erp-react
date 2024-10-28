import { useState } from 'react';
import { Button, Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { modules } from './data/modules';
import Tooltip from '@mui/material/Tooltip';
// import { theme } from './theme/theme';

function App() {
  // const [activeModule, setActiveModule] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState<number | null>(() => {
    // Check URL on initial load
    const params = new URLSearchParams(window.location.search);
    const moduleParam = params.get('sistema-erp');
    if (moduleParam) {
      const moduleIndex = modules.findIndex(
        m => m.name.toLowerCase().replace(/\s+/g, '-') === moduleParam
      );
      return moduleIndex >= 0 ? moduleIndex : null;
    }
    return null;
  });

  const updateURL = (index: number | null) => {
    if (index === null) {
      window.history.pushState({}, '', window.location.pathname);
    } else {
      const moduleName = modules[index].name.toLowerCase().replace(/\s+/g, '-');
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}?sistema-erp=${moduleName}`
      );
    }
  };

  // const handleNext = () => {
  //   if (activeModule !== null && activeModule < modules.length - 1) {
  //     setActiveModule(activeModule + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (activeModule !== null && activeModule > 0) {
  //     setActiveModule(activeModule - 1);
  //   }
  // };

  const handleNext = () => {
    if (activeModule !== null && activeModule < modules.length - 1) {
      const newIndex = activeModule + 1;
      setActiveModule(newIndex);
      updateURL(newIndex);
    }
  };

  const handlePrevious = () => {
    if (activeModule !== null && activeModule > 0) {
      const newIndex = activeModule - 1;
      setActiveModule(newIndex);
      updateURL(newIndex);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4,}}>

      {/* Modules list of buttons */}
      <Paper variant='outlined' sx={{ 
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
                    fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }
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
                onClick={() => {
                  setActiveModule(index);
                  updateURL(index);
                }}
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
            // <Button
            //   key={module.id}
            //   // onClick={() => setActiveModule(index)}
            //   onClick={() => {
            //     setActiveModule(index);
            //     updateURL(index);
            //   }}
            //   sx={{
            //     p: 0,
            //     height: '60px',
            //     width: '50px',
            //     border: activeModule === index ? 'none' : '1px solid #e0e0e0',
            //     bgcolor: activeModule === index ? (theme) => theme.palette.secondary.main : 'transparent',
            //   }}
            // >
            //   <img
            //     src={module.image}
            //     alt={module.name}
            //     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            //   />
            // </Button>
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

        {activeModule === null ? (
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              border: '1px dashed #ccc',
              borderRadius: 2,
            }}
          >
            <Typography variant='h6' color="text.secondary" sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}>
              Selecciona un módulo para ver sus detalles
            </Typography>
          </Box>
        ) : (
          <>
            {/* Top section */}
            <Grid container spacing={2} sx={{
                minHeight: { xs: 'auto', md: '50vh' },
            }}>
              {/* Left side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ mb: { xs: 0, md: 0 },
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row', lg: 'column' },
                  alignItems: { xs: 'center', md: 'center', lg: 'flex-start' },
                  // justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
                  gap: { xs: 2, md: 2, lg: 0 },
                }}>
                  <Box sx={{ bgcolor: (theme) => theme.palette.secondary.main, p: 2, borderRadius: '12px', mb: 2, 
                      width: { xs: '100px', md: '100px', lg: '100px' }, // Fixed width across breakpoints
                      height: { xs: '100px', md: '100px', lg: '100px' }, // Added fixed height
                      flexShrink: 0, // Prevent box from shrinking
                   }}>
                    <img
                      src={modules[activeModule].image}
                      alt={modules[activeModule].name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Changed to 'contain'
                    />
                  </Box>
                  <Box>
                      <Typography variant="h4" gutterBottom fontWeight="bold" sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                      }}>
                        {modules[activeModule].name}
                      </Typography>
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          bgcolor: (theme) => theme.palette.primary.main,
                          '&:hover': {
                            boxShadow: 2,
                          },
                          width: { xs: 'fit-content', md: 'fit-content' },
                          color: (theme) => theme.palette.secondary.contrastText,
                        }}
                        href={modules[activeModule].pdfLink}
                        target="_blank"
                      >
                        Ficha técnica
                      </Button>
                  </Box> 
                </Box>
              </Grid>

              {/* Right side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Paper variant='outlined' sx={{ p: 4, }}
                  >
                    <Typography
                      dangerouslySetInnerHTML={{ __html: modules[activeModule].brief }}
                      variant="h5" gutterBottom
                      sx={{
                        mb: 4,
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
                      }}
                    />

                    {modules[activeModule].benefits.map((benefit, index) => (
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
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 }
                          }}
                        />
                      </Box>
                    ))}
                  </Paper>

                </Box>
              </Grid>
            </Grid>            
          </>
        )}
      </Paper>    
    </Container>
  );
}

export default App;
