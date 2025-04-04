import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import chimeln from "public/images/chimeln.png";

export const products = [
  {
    href: "https://chimeln.vercel.app/",
    title: "Chimeln - Chat-app",
    description:
      "A beautiful and comprehensive projects with the help of Tailwind CSS,MERN stack and socket.io implementation for real time chat based applications.",
    thumbnail: chimeln,
    images: [chimeln, chimeln],

    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          This MERN (MongoDB, Express.js, React.js, Node.js) stack application
          is designed to deliver a seamless and dynamic user experience by
          leveraging Socket.IO for real-time updates and Zustand for efficient
          state management.
        </p>
        <p>
          - **Real-Time Updates:** Socket.IO enables bi-directional
          communication for instant updates in chat systems, notifications, and
          order tracking. - **State Management:** Zustand simplifies global
          state handling, reducing re-renders and improving performance. -
          **Scalable Backend:** Express.js efficiently manages RESTful APIs,
          while MongoDB stores data, ensuring seamless real-time interactions. -
          **Responsive UI:** React.js provides a dynamic interface, with Zustand
          optimizing state transitions. - **Authentication & Security:**
          JWT-based authentication ensures secure access, with RBAC for user
          permissions. - **Optimized Performance:** Socket.IO minimizes polling,
          and Zustand ensures fast state updates. - **Deployment:** The app
          scales via AWS, DigitalOcean, or Heroku, with frontend hosting on
          Vercel and backend on Render, supporting Dockerization.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://blog-xi-nine-14.vercel.app",
    title: "Aceternity",
    description:
      "Discover, read, and share engaging blog posts effortlessly with our app. Stay updated with the latest content, explore diverse topics, and enjoy a seamless reading experience anytime, anywhere.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://intellectarium.vercel.app/",
    title: "Educity",
    description:
      "Learn anytime, anywhere with our education app! Access interactive courses, engage with expert content, and enhance your skills at your own pace.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
