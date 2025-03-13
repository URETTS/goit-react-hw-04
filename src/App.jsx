import SearchBar from "./components/SearchBar";
import {useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery";

const App = () => {
    const [images, setImages] = useState([]);

    const handleSearch = (query) => {
        fetchArticles(query);
    };

    async function fetchArticles(query) {
        if (!query.trim()) return; // Если запрос пустой, не отправляем запрос
        
        try {
            const response = await axios.get("https://api.unsplash.com/search/photos", {
                params: {
                    query,
                    per_page: 10,
                    page: 1,
                    client_id: "zJtwtnC_i3GAj7K0cudedkc__1neUQEIQPNqm2wsT0g",
                },
            });
            setImages(response.data.results);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            <ImageGallery images={images} />
        </div>
    );
};

export default App;
