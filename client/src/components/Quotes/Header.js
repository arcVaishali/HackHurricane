import { useState, React, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";
import { useSpring, useScroll, animated } from "@react-spring/web";
import Image from "../../assets/image.jpg";

const Header = () => {
  const { width, height } = useWindowSize();
  const [isExploding, setIsExploding] = useState(false);
  const { scrollYProgress } = useScroll();
  const [quote, setQuote] = useState("");

  const styles = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  useEffect(() => {
    async function getQuote() {
      const quotePromptFromLocalStorage = localStorage.getItem("quotePrompt");
      const quoteFromLocalStorage = localStorage.getItem("quote");

      let quotePrompt = `Create a poetic quote about daily effort, perseverance, habit-building and success.`;

      if (quotePrompt === quotePromptFromLocalStorage) {
        setQuote(quoteFromLocalStorage);
        return;
      }

      localStorage.setItem("quotePrompt", quotePrompt);
      let body = {
        model: "text-davinci-003",
        prompt: quotePrompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      };

      let res = await fetch("https://apis.scrimba.com/openai/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      let response = await res.json();
      console.log(response);
      let newQuote = response.choices[0].text;
      localStorage.setItem("quote", newQuote);
      setQuote(newQuote);
    }

    getQuote();
  }, []);

  return (
    <div className="grid justify-center items-center bg-gradient-to-b from-[#f0f0f0] to-white rounded-xl p-16 m-8">
      <animated.span
        className="col-span-12 text-center text-5xl font-bold capitalize"
        style={{ ...styles }}
      >
        Daily Motivation
      </animated.span>

      <animated.div
        className="col-span-12 grid grid-cols-12 justify-between items-center gap-8 text-4xl font-semibold text-gray-400 p-4 my-8 text-center "
        style={{ ...styles }}
      >
        <animated.span className="col-span-8">{quote}</animated.span>
        <img className="col-span-4" src={Image} />
      </animated.div>

      {/* <ConfettiExplosion/> */}
      {/* <Confetti width={width} height={height} /> */}
    </div>
  );
};

export default Header;
