import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { handleInternalLinks } from '../utils/handleLinks';

interface BenefitsListProps {
  benefits: string[];
}

export const BenefitsList = ({ benefits }: BenefitsListProps) => {
  useEffect(() => {
    document.addEventListener('click', handleInternalLinks);
    return () => {
      document.removeEventListener('click', handleInternalLinks);
    };
  }, []);

  return (
    <>
      {benefits.map((benefit, index) => (
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
    </>
  );
};
