import FoodGallery from './components/Food-gallery'
import foodList from './menu.json'


export default function App() {
  return (
    <FoodGallery items={foodList} />
  )
}