"use client";

import { Card, Color, Metric, Title } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

const StatCard = ({ title, metric, color }: Props) => {
  return (
    <Card decoration="top" decorationColor={color}>
      <Title>{title}</Title>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default StatCard;
