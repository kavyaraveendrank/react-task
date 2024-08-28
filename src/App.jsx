import ShoppingPage from "./Pages/ShoppingPage";
import Todo from "./Pages/Todo"
import { Toaster } from "react-hot-toast"
import { TodoProvider } from "./Provider/TodoProvider"
import { CartProvider } from "./Provider/CartProvider"
import Boootstrap from "./Pages/Boootstrap";
import ProductPage from "./Pages/ProductPage";
import Form from "./Components/Form";
import Calculator from "./Pages/Calculator";




const App = () => {
  return (
    <CartProvider>
     <TodoProvider>
        {/* <Form/> */}
        {/* <ShoppingPage/>  */}
        {/* <Calculator/> */}
        {/* <ProductPage/> */}
        {/* <Todo/> */}
        {/* <Boootstrap/>      */}
 <Toaster position="top-right"/>
    </TodoProvider>
  </CartProvider> 
  )
}
export default App