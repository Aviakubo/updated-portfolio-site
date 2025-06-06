import truthOrDareImg from '../assets/images/truth-or-dare.png';
import receiptifyImg from '../assets/images/receiptify-clone-frontend.png';
import kmeansImg from '../assets/images/k-means-playlist.png';

export const projects = [
    {
      id: 1,
      title: "Truth or Dare App",
      description: "An interactive Truth or Dare application built with Angular to create engaging social experiences.",
      longDescription: `
        This application provides a modern take on the classic Truth or Dare game, featuring customizable 
        categories and difficulty levels. The app allows users to filter content based on age appropriateness.
      `,
      image: truthOrDareImg,
      technologies: ["Angular", "TypeScript", "CSS3"],
      github: "https://github.com/aviakubo/truthordarefrontend",
      liveDemo: "https://truth-or-dare-frontend.vercel.app/",
      challenges: [
        "Implemented responsive design that works on both mobile and desktop platforms",
        "Created smooth animations for card transitions and game flow",
        "Developed a filtering system for appropriate content based on player preferences"
      ],
      features: [
        "Random selection algorithm with weighted categories",
        "Custom categories and question submission"
      ]
    },
    {
      id: 2,
      title: "Spotify Playlist Analyzer",
      description: "An application that analyzes your Spotify listening habits and generates insights about your music taste.",
      longDescription: `
        This tool connects to your Spotify account and provides detailed analytics about your 
        listening patterns. It visualizes your top artists, genres, and tracks over time, 
        and can generate playlists based on your mood or activity preferences.
      `,
      image: receiptifyImg,
      technologies: ["React", "Node.js", "Express", "Spotify API", "Chart.js"],
      github: "https://github.com/Aviakubo/receiptify-clone-frontend",
      liveDemo: null, // No live demo yet
      challenges: [
        "Implemented OAuth authentication with the Spotify API",
        "Developed algorithms to analyze audio features and classify songs by mood",
        "Created interactive data visualizations of listening patterns"
      ],
      features: [
        "Detailed breakdown of listening habits with visual charts",
        "Mood-based playlist generation using Spotify's audio features",
        "Comparison of your music taste to global and demographic trends",
        "Exportable insights in shareable formats similar to Receiptify"
      ]
    },
    {
      id: 3,
      title: "K-means++ Playlist Generator",
      description: "A machine learning application that uses the k-means++ algorithm to find similar songs and create cohesive playlists.",
      longDescription: `
        This project uses the k-means++ clustering algorithm to analyze songs based on their audio features
        and group them into coherent playlists. The application extracts features like tempo, energy, and
        valence from tracks to identify songs with similar characteristics.
      `,
      image: kmeansImg,
      technologies: ["Python", "React", "TensorFlow", "Spotify API", "Flask"],
      github: "https://github.com/Aviakubo/spotify-content-recommendation",
      liveDemo: null, // No live demo yet
      challenges: [
        "Implemented the k-means++ algorithm for music feature clustering",
        "Developed methods to extract and normalize audio features from the Spotify API",
        "Created an intuitive interface for visualizing song clusters"
      ],
      features: [
        "Automatically generates playlists based on audio feature similarity",
        "Interactive visualization of song clusters",
        "Fine-tuning controls to adjust the importance of different audio features",
        "Seamless integration with your Spotify library"
      ]
    }
  ];