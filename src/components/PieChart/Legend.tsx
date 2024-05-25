import { Stack, Typography, useTheme } from '@mui/material';
import { IPieLegend } from 'interfaces/components/PieChart';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { capitalizeFirstLetter } from 'utils/helpers';

const Legend = ({ data }: IPieLegend) => {
  const theme = useTheme();
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];

  const renderLegendItem = (item: any, index: number) => {
    return (
      <Stack
        direction='row'
        gap='0.625rem'
        width='100%'
        alignItems='center'
        marginTop='0.5rem'
        key={item.name}
      >
        <CircleIcon
          htmlColor={colors[index]}
          sx={{
            width: 8,
            height: 8,
            marginBottom: index !== data.length - 1 ? '0.5rem' : undefined
          }}
        />
        <Stack
          direction='row'
          justifyContent='space-between'
          width='100%'
          paddingBottom={index !== data.length - 1 ? '0.5rem' : undefined}
        >
          <Typography variant='textSm' color={theme.palette.grey[900]}>
            {capitalizeFirstLetter(item.name)}
          </Typography>
          <Typography
            variant='textSm'
            fontWeight={theme.typography.fontWeightMedium}
          >
            {item.value}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const renderLegendItems = () => {
    return data.map((item, index) => {
      return renderLegendItem(item, index);
    });
  };

  return (
    <Stack maxHeight={200} overflow='overlay' minWidth={200} paddingRight={2}>
      {renderLegendItems()}
    </Stack>
  );
};

export default Legend;
