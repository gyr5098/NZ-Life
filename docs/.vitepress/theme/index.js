import DefaultTheme from 'vitepress/theme'
import ShopCard from '../components/ShopCard.vue'
import TipBox from '../components/TipBox.vue'
import ImgGallery from '../components/ImgGallery.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShopCard', ShopCard)
    app.component('TipBox', TipBox)
    app.component('ImgGallery', ImgGallery)
  }
}
