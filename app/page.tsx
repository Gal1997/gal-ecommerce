"use client";
// MAYBE REMOVE , its only for the images showcase
import { Text } from "@radix-ui/themes";
import { Check } from "lucide-react";
import PageAnimationWrapper from "./components/PageAnimationWrapper";
import Card from "./components/Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

export default function Home() {
  const images = [
    "/images/image-1.jpg",
    "/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
    "/images/image-6.jpg",
    "/images/image-7.jpg",
    "/images/image-8.jpg",
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [ref, { width }] = useMeasure();
  const [duration, setDuration] = useState(FAST_DURATION);
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    let controls;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);
  return (
    <PageAnimationWrapper>
      <div className="mt-8 text-center">
        <Text size="8" className="">
          Your go-to site for the{" "}
          <span className="bg-green-600 font-extrabold">BEST</span> apparel with
          the <span className="bg-green-600 font-extrabold">LOWEST</span> prices
          around
        </Text>
        <ul className="mt-8 font-medium sm:items-start">
          <div className="space-y-2">
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              High-quality, original clothes
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              Extremely affordable - Cut the brands, Cut the price
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              Lightning fast delivery in Israel and Europe
            </li>
          </div>
        </ul>
        <motion.div
          className="absolute left-0 flex gap-4 "
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((item, index) => (
            <Card image={item} key={index} />
          ))}
        </motion.div>
      </div>
    </PageAnimationWrapper>
  );
}
