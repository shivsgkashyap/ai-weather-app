"use client";

import { Card, Divider, Subtitle, Text, Title } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Title className="text-6xl font-bold text-center mb-10">
          Weather AI
        </Title>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13, React.js, TailwindCSS, Tremor 2.0,
          GraphQL + More
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
