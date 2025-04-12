# 🚀 Fovero Portfolio

![Portfolio Banner](https://raw.githubusercontent.com/foverokavindz/fovero-folio/main/public/metaImage.jpg)

A modern, responsive portfolio website built with React and Vite, featuring a sleek UI with dark/light mode support, interactive components, and a contact form.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme** - Toggle between themes with a single click
- **Interactive UI** - Smooth animations and transitions
- **Portfolio Showcase** - Filterable project gallery
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Testimonials** - Swiper-powered testimonial carousel
- **Pricing Section** - Showcase service offerings and pricing plans

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS with custom variables
- **Icons**: React Icons, Font Awesome
- **Email Integration**: EmailJS
- **Notifications**: React-Toastify
- **Slider/Carousel**: Swiper

## 📋 Prerequisites

- Node.js (v14.0 or later)
- npm or yarn

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fovero-folio.git
   cd fovero-folio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Setup environment variables**

   Create a `.env` file in the root directory and add your EmailJS credentials:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The site will be available at `http://localhost:5173/`

## 🚀 Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Project Structure

```
fovero-folio/
├── public/               # Public assets
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── about/        # About section components
│   │   ├── blog/         # Blog section components
│   │   ├── contact/      # Contact form components
│   │   ├── home/         # Home section components
│   │   ├── portfolio/    # Portfolio section components
│   │   ├── pricing/      # Pricing section components
│   │   ├── resume/       # Resume section components
│   │   ├── services/     # Services section components
│   │   ├── sidebar/      # Sidebar navigation
│   │   ├── testimonials/ # Testimonials section components
│   │   └── themeToggle/  # Theme toggle component
│   ├── context/          # React context providers
│   │   └── theme.jsx     # Theme context for dark/light mode
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
└── package.json          # Project dependencies and scripts
```

## 🎨 Customization

You can customize this portfolio by:

1. **Modifying content**: Update the data in each component to reflect your information
2. **Changing colors**: Edit the CSS variables in `src/index.css`
3. **Adding new sections**: Create new components and add them to `App.jsx`
4. **Updating images**: Replace images in the `src/assets` directory

## 📷 Screenshots

<details>
<summary>Click to expand screenshots</summary>

### Home Page (Light Theme)

![Home Light](https://via.placeholder.com/800x400?text=Home+Light+Theme)

### Portfolio Section (Dark Theme)

![Portfolio Dark](https://via.placeholder.com/800x400?text=Portfolio+Dark+Theme)

### Contact Form

![Contact Form](https://via.placeholder.com/800x400?text=Contact+Form)

</details>

## 👨‍💻 Author

**Kavinda Weerasinghe**

- LinkedIn: [Kavinda Maduranga](https://www.linkedin.com/in/kavinda-maduranga-1302a71b7)
- Twitter: [@kavindzMW](https://twitter.com/kavindzMW)
- GitHub: [@foverokavindz](https://github.com/foverokavindz)

## 🙏 Acknowledgements

- React Icons - [react-icons.github.io](https://react-icons.github.io/)
- Swiper - [swiperjs.com](https://swiperjs.com/)
- React Toastify - [fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- EmailJS - [emailjs.com](https://www.emailjs.com/)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/foverokavindz">Kavinda Weerasinghe</a>
</p>
