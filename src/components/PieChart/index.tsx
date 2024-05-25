import { Stack, Typography, useTheme } from '@mui/material';
import { ICustomPieChart } from 'interfaces/components/PieChart';
import { Cell, Pie, PieChart } from 'recharts';
import Legend from './Legend';

const CustomPieChart = ({
  title,
  data,
  pieChartWidth,
  pieChartHeight,
  innerRadius,
  outerRadius,
  containerMaxWidth,
  ...rest
}: ICustomPieChart) => {
  const theme = useTheme();
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <Stack
      sx={{
        padding: '1.5rem',
        border: '1px solid black',
        flex: 1,
        alignItems: 'center',
        maxWidth: containerMaxWidth
      }}
    >
      <Typography
        variant='textLg'
        fontWeight={theme.typography.fontWeightBold}
        alignSelf='flex-start'
        marginBottom='1.25rem'
      >
        {title}
      </Typography>
      <Stack {...rest}>
        <PieChart width={pieChartWidth} height={pieChartHeight}>
          <Pie
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={-10}
            cornerRadius={100}
            dataKey='value'
          >
            {data.map((_, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Legend data={data} />
      </Stack>
    </Stack>
  );
};

export default CustomPieChart;
