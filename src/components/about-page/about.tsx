"use client";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import "@/styles/about/about.css";
import { useState } from "react";
import Skills from "./skills/skills";
import Info from "./bio/info";

type TooltipState = Record<number, boolean>;

export default function AboutPage() {
  const [tooltipOpen, setTooltipOpen] = useState<TooltipState>({});

  const handleTooltipOpen = (id: number) => {
    setTooltipOpen((state) => ({
      ...state,
      [id]: true,
    }));
  };

  const handleTooltipClose = (id: number) => {
    setTooltipOpen((state) => ({
      ...state,
      [id]: false,
    }));
  };

  return (
    <>
      <Header />
      <Box mb={2}>
        <Info></Info>
        <Skills
          handleTooltipOpen={handleTooltipOpen}
          handleTooltipClose={handleTooltipClose}
          tooltipOpen={tooltipOpen}
        ></Skills>
      </Box>
      <Footer />
    </>
  );
}
