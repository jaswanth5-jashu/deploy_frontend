import { useEffect, useState } from "react";
import "../css/gallery.css";
import { Helmet } from "react-helmet-async";

function Gallery() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔹 Fetch gallery images from backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);

        // 🔹 Extract unique categories dynamically
        const uniqueCategories = [
          "All",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Gallery API error:", err));
  }, []);

  // 🔹 Filter images based on category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* SEO for Gallery Page */}
      <Helmet>
        <title>Gallery | Akhil's Cloud Technology Platform LLP</title>

        <meta
          name="description"
          content="Browse the photo gallery of Akhil's Cloud Technology Platform LLP showcasing events, activities, achievements, and workplace culture."
        />

        <meta
          name="keywords"
          content="Akhil gallery, Akhil events, Akhil activities, Akhil workplace"
        />

        <meta
          property="og:title"
          content="Gallery | Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Explore moments and milestones from Akhil's Cloud Technology Platform LLP."
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/gallery"
        />
      </Helmet>

    <div className="gallery-page">
      {/*HERO */}
      <section className="hero-gallery">
        <div className="gallery-hero-c">
          <h1>Our Gallery</h1>
          <p>
            Explore our journey through images — from events, activities,
            achievements, and our workspace.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="gallery-section">
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-info">
                <h4>{item.title}</h4>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <span
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <h3>{selectedImage.title}</h3>
          <p>{selectedImage.category}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Gallery;
