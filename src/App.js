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
    imagesArray: null,
    loading: false,
    selectedImage: null,
    page: 1,
    showModal: false,
    newImagesArray: null,
  };

  // newimagesArray = [];

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nameImage !== this.state.nameImage) {
      this.imagesFech();
    }
  }
  // componentDidMount() {
  //   if (this.state.imagesArray !== null) {
  //     this.setState((prevState) => ({
  //       imagesArray: [...prevState, ...this.state.newImagesArray],
  //     }));
  //   }
  // }
  // componentWillUnmount() {
  //   console.log("все");
  // }
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
  // (imagesArrayFetch) => this.op(imagesArrayFetch.hits)

  op = (imagesArrayFetch) => {
    if (this.state.imagesArray !== null) {
      this.setState((prevState) => ({
        newImagesArray: [...prevState.imagesArray, ...imagesArrayFetch],
      }));
    }

    if (this.state.imagesArray === null) {
      this.setState({
        imagesArray: imagesArrayFetch,
      });
    }
    // if (this.state.imagesArray !== null) {
    //   this.setState({
    //     imagesArray: imagesArrayFetch,
    //   });
    //   this.setState({
    //     newImagesArray: [
    //       ...this.state.newImagesArray,
    //       ...this.state.imagesArray,
    //     ],
    //   });
    // }
    // if (this.state.imagesArray === null) {
    //   this.setState({
    //     imagesArray: imagesArrayFetch,
    //   });
    //   this.setState({
    //     newImagesArray: this.state.imagesArray,
    //   });

    //   // console.log("gfaegf");
    // }
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

  onClickLoadMore = (e) => {
    // console.log(e.target);

    this.imagesFech();
    // const newImagesArray = ["lel"];

    // const lol = [...this.state.imagesArray, ...this.state.newImagesArray];
    this.op();
    //   setState((prevState) => ({
    //   newImagesArray: [...prevState.imagesArray, ...this.state.newImagesArray],
    // }));
    // console.log(lol);
  };

  render() {
    // const newImagesArray = [];

    const {
      loading,
      showModal,
      nameImage,
      imagesArray,
      newImagesArray,
      selectedImage,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.hendleFormaSubmit} />
        {loading && <Loader />}
        {!nameImage && (
          <p>Відсутнє ім'я! Будь ласка введіть його в поле яке вище.</p>
        )}
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
        <ToastContainer autoClose={3000} />
        <Button onClick={this.onClickLoadMore}>Завантажити ще</Button>
      </>
    );
  }
}
