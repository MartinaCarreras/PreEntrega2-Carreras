import { ItemDetailContainer, ItemListContainer, CartContainer, Error, CheckoutContainer } from "../components/pages/"

export const routes = [
    { id:"home", path:"/", Element: ItemListContainer },
    { id:"category", path:"/category/:category", Element:ItemListContainer },
    { id:"cart", path:"/cart", Element:CartContainer },
    { id:"checkout", path:"/checkout", Element:CheckoutContainer },
    { id:"detail", path:"/product/:id", Element:ItemDetailContainer },
    { id:"error", path:"*", Element:Error }
]
