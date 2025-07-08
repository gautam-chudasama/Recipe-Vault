# Recipe Management App (Recipe Vault)

A modern, responsive recipe management application built with React, Vite, and Tailwind CSS. Create, view, edit, and manage your favorite recipes with an intuitive user interface.

## ✨ Features

- **Recipe Management**: Create, read, update, and delete recipes
- **Favorites System**: Add recipes to your favorites list for quick access
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Local Storage**: All data persists in browser's local storage
- **Toast Notifications**: Real-time feedback with React Toastify
- **Routing**: Single Page Application with React Router
- **Icon Integration**: Beautiful icons with Remix Icon

## 🚀 Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Routing**: React Router DOM 7.6.2
- **Form Handling**: React Hook Form 7.57.0
- **HTTP Client**: Axios 1.10.0
- **Notifications**: React Toastify 11.0.5
- **Icons**: Remix Icon 4.6.0
- **Unique IDs**: Nanoid 5.1.5

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd day-72
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Recipecard.jsx      # Recipe card component
├── context/
│   └── Recipecontext.jsx   # Global state management
├── pages/
│   ├── About.jsx           # About page
│   ├── Create.jsx          # Create recipe page
│   ├── Fav.jsx             # Favorites page
│   ├── Home.jsx            # Home page
│   ├── PageNotFound.jsx    # 404 page
│   ├── Recipes.jsx         # All recipes page
│   └── Singlerecipe.jsx    # Recipe detail/edit page
├── routes/
│   └── Mainroutes.jsx      # Application routing
├── utils/
│   └── axios.jsx           # Axios configuration
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎯 Usage

### Creating a Recipe
1. Navigate to the **Create** page
2. Fill in the recipe details:
   - Image URL
   - Recipe Title
   - Ingredients
   - Instructions
   - Description
   - Category (Breakfast, Lunch, Supper, Dinner)
3. Click "Create Recipe"

### Viewing Recipes
- Visit the **Recipes** page to see all your recipes
- Click on any recipe card to view details

### Managing Favorites
- Click the heart icon on any recipe to add/remove from favorites
- Visit the **Favourite** page to see your saved recipes

### Editing Recipes
- Click on a recipe to open the detail view
- Modify any field in the form
- Click "Update Recipe" to save changes
- Use "Delete Recipe" to remove the recipe

## 🔧 Configuration

### Environment Setup
The app uses local storage for data persistence. No external database setup is required.

### Customization
- **Styling**: Modify Tailwind classes in components
- **API Integration**: Update `src/utils/axios.jsx` for backend integration
- **Categories**: Add more categories in `Create.jsx` and `Singlerecipe.jsx`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🎨 UI/UX Features

- **Hover Effects**: Interactive hover states on cards
- **Loading States**: Proper loading indicators
- **Error Handling**: Toast notifications for user feedback
- **Intuitive Navigation**: Clean navigation with active states

## 🔍 Data Structure

Each recipe contains:
```javascript
{
  id: "unique-id",
  title: "Recipe Title",
  image: "image-url",
  ingredients: "ingredients-text",
  instructions: "instructions-text",
  description: "description-text",
  category: "breakfast|lunch|supper|dinner"
}
```

## 🚧 Future Enhancements

- [ ] Search and filter functionality
- [ ] Recipe categories with filtering
- [ ] Export recipes to PDF
- [ ] Recipe sharing functionality
- [ ] Ingredient shopping lists
- [ ] Recipe ratings and reviews
- [ ] Backend API integration
- [ ] User authentication
- [ ] Recipe import from URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Data is stored in local storage only (will be lost if browser data is cleared)
- No image validation for URLs
- Limited error handling for network requests

## 📞 Support

If you encounter any issues or have questions, please open an issue on the repository.

Email - gautam.chudasama@outlook.com
---

**Happy Cooking! 👨‍🍳👩‍🍳**
