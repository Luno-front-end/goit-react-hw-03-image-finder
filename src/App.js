// {PROPTYPES}
// {Рефакторінг}

import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Searchbar from "./components/Searchbar";
import ImageGalleryItem from "./components/ImageGallery";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Button from "./components/Button";
import "./styles/styles.css";

export default class Finder extends Component {
  state = {
    nameImage: "",
    imagesArray: [],
    loading: false,
    selectedImage: null,
    page: 1,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nameImage !== this.state.nameImage) {
      this.imagesFech();
    }
  }

  imagesFech = () => {
    const KEY = "key=19055497-436f2f9143aedeb9fa32eebb3";
    const GENERAL_LINK = "https://pixabay.com/api/";
    this.setState({ loading: true });

    fetch(
      `${GENERAL_LINK}?${KEY}&q=${this.state.nameImage}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((r) => r.json())
      .then((imagesArrayFetch) => this.op(imagesArrayFetch.hits))
      .then(this.incrementPage())
      .finally(() => this.setState({ loading: false }));
  };

  op = (imagesArrayFetch) => {
    imagesArrayFetch === []
      ? this.setState({
          imagesArray: imagesArrayFetch,
        })
      : this.setState((prevState) => ({
          imagesArray: [...prevState.imagesArray, ...imagesArrayFetch],
        }));
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  hendleFormaSubmit = (nameImage) => {
    this.setState({ nameImage });
  };

  isCurrentImage = (currentImage, tags) => {
    console.log(currentImage);
    console.log(tags);
    this.setState({
      selectedImage: [currentImage, tags],
      showModal: true,
    });
  };
  scrollGallery = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  onClickLoadMore = () => {
    this.imagesFech();
    this.scrollGallery();
  };
  render() {
    const {
      loading,
      showModal,
      nameImage,
      imagesArray,
      selectedImage,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.hendleFormaSubmit} />

        {imagesArray && (
          <ImageGalleryItem
            arrayImages={imagesArray}
            onSubmit={this.isCurrentImage}
          />
        )}
        {showModal && (
          <Modal onClose={() => this.togleModal()}>
            <img src={selectedImage[0]} alt={selectedImage[1]} />
          </Modal>
        )}
        {!nameImage && (
          <div className="container-paragraphInfo">
            <p className="paragraphInfo">
              Відсутнє ім'я! Будь ласка введіть його в поле яке вище.
            </p>
          </div>
        )}
        <ToastContainer autoClose={3000} />
        {loading && <Loader />}

        {imagesArray.length !== 0 && (
          <Button onClick={this.onClickLoadMore}>Завантажити ще</Button>
        )}
      </>
    );
  }
}
