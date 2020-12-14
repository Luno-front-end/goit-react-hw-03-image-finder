import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGalleryItem from "./components/ImageGallery";
import Modal from "./components/Modal";
import "./styles/styles.css";

export default class Finder extends Component {
  state = {
    nameImage: "",
    images: null,
    loading: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const KEY = "key=19055497-436f2f9143aedeb9fa32eebb3";
    const GENERAL_LINK = "https://pixabay.com/api/";
    if (prevState.nameImage !== this.state.nameImage) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `${GENERAL_LINK}?${KEY}&q=${this.state.nameImage}&page=1&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((r) => r.json())
          .then((images) => this.setState({ images }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  hendleFormaSubmit = (nameImage) => {
    this.setState({ nameImage });
  };

  isCurrentImage = (currentImage) => {
    console.log(currentImage);
    // return currentImage;
    this.setState({ selectedImage: currentImage });
  };

  render() {
    const { loading, nameImage, images, selectedImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.hendleFormaSubmit} />
        {loading && <p>Загрузка</p>}
        {!nameImage && (
          <p>Відсутнє ім'я! Будь ласка введіть його в поле яке вище.</p>
        )}
        {images && (
          <ImageGalleryItem
            arrayImages={images.hits}
            onSubmit={this.isCurrentImage}
          />
        )}
        {selectedImage && <Modal selImage={selectedImage} />}
      </>
    );
  }
}
