import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Links = () => {
  const styles = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <div className="shadow-md shadow-[#FFFFFF] rounded-xl border-2 border-[#FFFFFF] bg-gradient-to-t from-[#2aa4cd29] to-[#ADD8E6] transition ease-in-out delay-50">
      <animated.div
        className="col-span-12 text-center text-5xl font-bold capitalize my-8 p-4 border-b-[1px] border-gray-300"
        style={{ ...styles }}
      >
        Resources and Links
      </animated.div>
      <div
        style={{ border: "1px solid black" }}
        class="accordion"
        id="accordionExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              style={{ fontSize: "22px" }}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Data Structure and Algorithm #1 &nbsp;{" "}
              <span class="badge bg-primary rounded-pill">14+</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <a href="https://www.geeksforgeeks.org/explore">
                  1. GeeksForGeeks
                </a>
              </p>
              <p>
                <a href="https://leetcode.com/">2. LeetCode</a>
              </p>
              <p>
                <a href="https://www.codechef.com/">3. CodeChef</a>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              style={{ fontSize: "22px" }}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Development #2 &nbsp;{" "}
              <span class="badge bg-primary rounded-pill">20+</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <a href="https://www.shiksha.com/online-courses/introduction-to-web-development-course-courl177">
                  1. Coursera
                </a>
              </p>
              <p>
                <a href="https://www.perssondennis.com/articles/extensive-list-of-best-development-resources-121-links-to-guides-cheat-sheets-and-more-list-of-resources">
                  2. Perssodenis
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style={{ fontSize: "22px" }}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Interview Preperation #3 &nbsp;{" "}
              <span class="badge bg-primary"> New</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <a href="https://www.geeksforgeeks.org/interview-preparation/">
                  1. GeeksForGeeks
                </a>
              </p>
              <p>
                <a href="https://coderbyte.com/#courses">2. CoderByte</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
