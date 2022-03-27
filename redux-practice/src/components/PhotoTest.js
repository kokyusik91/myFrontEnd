import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from '../config/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const PhotoTest = () => {
  console.log('hello');
  const [photoPopUp, setPhotoPopUp] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  const selectedImage = data.find((item) => {
    return item.id === photoIdx;
  });
  console.log(selectedImage);
  const handlePhotoEnlarge = (id) => {
    console.log(`사진 확대 ${id} 가즈아`);
    setPhotoIdx(id);
    setPhotoPopUp(true);
  };
  const handleCloseModal = () => {
    setPhotoPopUp(false);
  };

  return (
    <>
      <Container>
        <Text size='19px'>이미지 확대 기능</Text>
        <Grid>
          <ImageWrapperGrid>
            {data &&
              data.map((champion) => {
                return (
                  <Image
                    onClick={() => handlePhotoEnlarge(champion.id)}
                    key={champion.id}
                    src={champion.src}
                  />
                );
              })}
          </ImageWrapperGrid>
        </Grid>
      </Container>
      {photoPopUp && (
        <PhotoModal
          handleCloseModal={handleCloseModal}
          data={data}
          photoIdx={photoIdx}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
};

const PhotoModal = ({ handleCloseModal, data, selectedImage, photoIdx }) => {
  return (
    <PhotoPopUpModalWrapper onClick={handleCloseModal}>
      <AbsoluteGrid onClick={handleCloseModal}>
        <Text fontColor='#fff'>X</Text>
      </AbsoluteGrid>
      {/* <ImageContainer img={selectedImage.src} /> */}
      <SwiperLB data={data} photoIdx={photoIdx} />
    </PhotoPopUpModalWrapper>
  );
};

const SwiperLB = (props) => {
  const { data, photoIdx } = props;

  const setting = {
    slidesPerView: 1,
    navigation: false,
    loop: true,
    initialSlide: photoIdx - 1,
  };
  return (
    <Swiper
      {...setting}
      onSwiper={(swiper) => swiper.activeIndex}
      onSlideChange={(e) => console.log(e.activeIndex)}
    >
      {data &&
        data.map((info) => {
          return (
            <SwiperSlide key={info.id}>
              <SlideImage src={info.src} key={info.id} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

const Container = styled.div`
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapperGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  text-align: center;
  color: ${(props) => props.fontColor};
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 12px;
  border-radius: 5px;
  src: ${(props) => props.src};
  object-fit: cover;
`;

const SlideImage = styled.img`
  width: 100%;
  src: ${(props) => props.src};
  object-fit: contain;
`;

const Image2 = styled.div`
  width: 240px;
  height: 240px;
  margin-right: 12px;
  background-image: url(${(props) => props.img});
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  background-size: cover;
`;

const PhotoPopUpModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AbsoluteGrid = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  /* transform: translate(-50%, -50%); */
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default PhotoTest;
