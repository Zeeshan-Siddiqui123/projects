import About from "./Screens/About";
import Blog from "./Screens/Blog";
import Contact from "./Screens/Contact";
import Courses from "./Screens/Courses";
import Index from "./Screens/Index";

export const routes = [
    {
        path: "/",
        screen: <Index />,
        label: "HOME"
    },
    {
        path: "/about",
        screen: <About />,
        label: "ABOUT"
    },
    {
        path: "/courses",
        screen: <Courses />,
        label: "COURSES"
    },
    {
        path: "/blog",
        screen: <Blog />,
        label: "BLOG"
    },
    {
        path: "/contact",
        screen: <Contact />,
        label: "CONTACT"
    },
]