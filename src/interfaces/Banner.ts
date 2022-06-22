interface Banner {
  id: number;
  data: {
    main_image: {
      url: string;
      alt: string;
    }
    title: string;
  }
}

export default Banner
