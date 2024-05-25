import { StackProps } from '@mui/material';

export interface ICustomPieChart extends StackProps {
  title: string;
  data: any[];
  pieChartWidth: number;
  pieChartHeight: number;
  innerRadius: number;
  outerRadius: number;
  containerMaxWidth?: string | number;
}

export interface IPieLegend {
  data: any[];
}
