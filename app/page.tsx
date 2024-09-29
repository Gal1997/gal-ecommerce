"use client";
// MAYBE REMOVE , its only for the images showcase
import { Flex, Text } from "@radix-ui/themes";
import { Check } from "lucide-react";
import PageAnimationWrapper from "./components/PageAnimationWrapper";
import Card from "./components/Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Review from "./components/Review";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { Icons } from "./components/Icons";
import { Fredoka } from "@next/font/google";

const myFont = Fredoka({
  subsets: ["latin"],
});

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
    "/images/image-9.jpg",
    "/images/image-10.jpg",
    "/images/image-11.jpg",
    "/images/image-12.jpg",
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [ref, { width }] = useMeasure();
  const [duration, setDuration] = useState(FAST_DURATION);
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const finalPosition = -width / 2 - 8 - 500;
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
      controls = animate(xTranslation, [-500, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);
  return (
    <PageAnimationWrapper>
      <Text
        className={
          myFont.className +
          " text-5xl lg:text-6xl xl:text-7xl text-center block"
        }
      >
        Lets <span className="bg-green-200 font-semibold">Freshen Up</span> Your
        Attire.
      </Text>
      <MaxWidthWrapper>
        <Flex
          direction={"column"}
          className={myFont.className + " mt-8 text-center gap-y-2"}
        >
          <ul className="font-medium sm:items-start">
            <div className="space-y-2">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <Text size={"5"}>High-quality, original clothes</Text>
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <Text size={"5"}>
                  Extremely affordable - Cut the brands, Cut the price
                </Text>
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-600" />
                <Text size={"5"}>
                  Lightning fast delivery in Israel and Europe
                </Text>
              </li>
            </div>
          </ul>
          <Text size="7" mt={"5"} mb={"2"} weight={"medium"}>
            🔥 Frequently Purchased 🔥
          </Text>
          <motion.div
            className="relative left-0 flex gap-4 w-max"
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

          <Text size={"9"} mb="7">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-4 text-green-500" />
            </span>{" "}
            are saying
          </Text>

          <div className={"grid grid-cols-1 lg:grid-cols-2 gap-14 "}>
            <Review
              text={
                " I'm honestly just impressed with the quality of the clothes, usually after a couple months your can clearly see some wear and tear , but the jackets i've purchased here still looks brand new after like 10 months of continous usage, plus the prices are pretty great"
              }
              name={"Yarden Levi"}
              picture={""}
            />
            <Review
              text={
                "I recently shopped at Gal's E-commerce and was impressed by the variety and quality of their clothing. The website is user-friendly, with detailed product descriptions and helpful size guides. My order arrived quickly and beautifully packaged. Highly recommend for anyone looking to refresh their wardrobe!"
              }
              name={"Orna Koral"}
              picture={"https://i.imgur.com/cTKPNCC.png"}
            />
            <Review
              text={
                "I just love shopping at this store! even obssesed if I must be honest... The selection is trendy, and the site is easy to navigate. My order arrived promptly, and the customer service was excellent. Definitely a go-to for fashion!"
              }
              name={"Yasmin Rokach"}
              picture={"https://i.imgur.com/GqlhD6I.png"}
            />
            <Review
              text={
                "Gal's E-commerce is a delightful shopping experience! The site features a wide range of trendy women's clothing, and the checkout process is seamless. My order arrived quickly, and the quality exceeded my expectations. Highly recommend for stylish finds at great prices!"
              }
              name={"Nitzan Peretz"}
              picture={"https://i.imgur.com/K10KhFt.png"}
            />
          </div>
        </Flex>
      </MaxWidthWrapper>
    </PageAnimationWrapper>
  );
}
