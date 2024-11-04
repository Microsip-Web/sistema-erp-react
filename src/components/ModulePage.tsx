import { useParams } from 'react-router-dom';
import { modules } from '../data/modules';
import { Box, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BenefitsList } from './BenefitsList';

export function ModulePage() {
  const { moduleUrl } = useParams();
  // Find module by its URL property
  const module = modules.find(m => m.url === '/' + moduleUrl);

  if (!module) {
    return null; // or a 404 component
  }

  return (
    <>
      {/* Top section */}
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
            gap: { xs: 2, md: 2, lg: 0 },
          }}>
            <Box sx={{
              bgcolor: (theme) => theme.palette.secondary.main,
              p: 2,
              borderRadius: '12px',
              mb: 2,
              width: { xs: '100px', md: '100px', lg: '100px' },
              height: { xs: '100px', md: '100px', lg: '100px' },
              flexShrink: 0,
            }}>
              <img
                src={module.image}
                alt={module.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
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
                {module.name}
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
                href={module.pdfLink}
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
            <Paper variant='outlined' sx={{ p: 4, bgcolor: '#e5e5e5' }}>
              <Typography
                dangerouslySetInnerHTML={{ __html: module.brief }}
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  mb: 4,
                  fontWeight: 500,
                  letterSpacing: '0.015em'
                }}
              />

              <BenefitsList benefits={module.benefits} />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
