# Task Master

![Task Master](src/assets/logo.svg)

**Task Master** is a premium, portfolio-ready Todo List application built with React.js, focusing on a modern UI, smooth interactions, and robust functionality. It features a beautiful glass-morphic design, dark mode support, and comprehensive task management capabilities.

## 🚀 Features

### Core Functionality
- **Create Tasks**: Quickly add tasks with priorities (High, Medium, Low).
- **Edit Tasks**: Inline editing for task descriptions.
- **Delete Tasks**: Remove tasks you no longer need.
- **Complete Tasks**: Mark tasks as done with a satisfying toggle animation.
- **Persistency**: All data is saved automatically to Local Storage.

### Organization & Productivity
- **Priority Levels**: Visual badges for High (Red), Medium (Yellow), and Low (Green) priority.
- **Filtering**: View All, Pending, or Completed tasks.
- **Search**: Real-time search to find specific tasks instantly.
- **Stats**: Live counter of completed vs. total tasks.

### User Experience (UX)
- **Dark/Light Mode**: Polished themes for both day and night usage.
- **Toast Notifications**: Non-intrusive feedbacks for all actions (Add, Delete, Complete).
- **Empty States**: Custom illustrations when the list is empty.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Transitions)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Import your repository.
4. Click **Deploy**.

## 📂 Project Structure

```
src/
 ├── assets/          # Static assets (images, icons)
 ├── components/      # Reusable UI components
 │    ├── FilterBar.jsx
 │    ├── SearchBar.jsx
 │    ├── Toast.jsx
 │    ├── TodoInput.jsx
 │    ├── TodoItem.jsx
 │    └── TodoList.jsx
 ├── App.jsx          # Main application logic
 ├── main.jsx         # Entry point
 └── style.css        # Global styles and themes
```

---
Built with ❤️ using React.
