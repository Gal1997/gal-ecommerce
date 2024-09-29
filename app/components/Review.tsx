/* eslint-disable react/no-unescaped-entities */
import { Card, Flex, Avatar, Text, Box } from "@radix-ui/themes";
import React from "react";
import { PiShieldCheck } from "react-icons/pi";
import { Star } from "lucide-react";

interface Props {
  text: string;
  name: string;
  picture: string;
}

const Review = ({ text, name, picture }: Props) => {
  return (
    <Flex justify="start" direction="row" maxWidth="650px">
      <Box className="text-start">
        <Flex gap="3" className="mb-2">
          <Avatar
            size="6"
            src={
              picture ||
              "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            }
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="4" weight="bold" className="mt-3">
              {name}
            </Text>
            <PiShieldCheck
              fill="green"
              className="inline mr-1 mb-[3px] ml-[-5px]"
            />
            <Text size="2" color="gray">
              Verified Purchase
            </Text>
          </Box>
        </Flex>
        <Text>{text}</Text>
        <div className="flex gap-0.5 mt-3">
          <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
          <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
          <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
          <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
          <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
        </div>
      </Box>
    </Flex>
  );
};

export default Review;
