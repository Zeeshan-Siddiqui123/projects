import Shop from "./Screens/Shop";
import Men from "./Screens/Men"
import Women from "./Screens/Women"
import Kids from "./Screens/Kids"

export const routes = [
    {
        path: "/",
        screen: <Shop/>,
        label: "Shop",
    },
    {
        path: "/men",
        screen: <Men/>,
        label: "Men",
    },
    {
        path: "/women",
        screen: <Women/>,
        label: "Women",
    },
    {
        path: "/kids",
        screen: <Kids/>,
        label: "Kids",
    },
]