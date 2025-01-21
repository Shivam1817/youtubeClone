
# YouTube Clone

A modern YouTube clone built with React, featuring real-time video search, dark theme, and responsive design. This project uses the YouTube Data API to fetch and display actual YouTube content.

## 🚀 Features

- **Real YouTube Data Integration**
- **Video Search Functionality**
- **Category-wise Filtering**
- **Dark Theme Interface**
- **Responsive Design**
- **Modern UI with Material Icons**

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Material UI Icons
- YouTube Data API v3
- Axios
- CSS3
- Vite

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shivam1817/youtube-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd youtube-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `config.js` file in the `src` directory:
   ```javascript
   export const API_KEY = 'your_youtube_api_key';
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🔑 API Configuration

This project uses the YouTube Data API v3. To run the project, you'll need to:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the **YouTube Data API v3**.
4. Create credentials (API key).
5. Add the API key to your `config.js` file.

## 📁 Project Structure

```
youtube-clone/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── VideoCard.jsx
│   │   └── MainContent.jsx
│   ├── pages/
│   │   └── SearchPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── config.js
├── package.json
└── README.md
```

## 🎯 Upcoming Features

- Video playback functionality
- Comments section
- Channel pages
- Video recommendations
- Watch history

## 👨‍💻 Author

**Shivam Kumar**

- GitHub: [@Shivam1817](https://github.com/Shivam1817)
- Email: shivam.chem21@iitg.ac.in

## 🙏 Acknowledgments

- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material UI Icons](https://mui.com/)
- [Vite Build Tool](https://vitejs.dev/)

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For any queries or suggestions, feel free to reach out:

- Email: shivam.chem21@iitg.ac.in
- GitHub: [@Shivam1817](https://github.com/Shivam1817)
