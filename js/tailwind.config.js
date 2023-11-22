tailwind.config = {
    theme: {
      extend: {
        // color start
        colors: {
          navbarBg: "rgba(23, 13, 110, 0.5)",
          whitewhite: "#FFFFFFF",
          universalGreen: "#1BBF00",
          bannerOverlay: "rgba(105, 97, 196, 0.9)",
          offWhite: "#F9F9FB",
          myGray: "#C4C4C4",
          shadowColor: "rgba(162, 169, 192, 0.15)",
          weirdOffWhite: "#FDFDFD",
          ppColor: "#726E9E",
          cardPurple: "#6B62C5"
        },
        // color end
        // container start
        maxWidth: {
            containerWidth: "1170px",
        },
        // container end
        // fonts start
        fontFamily: {
            'openS': ['Open Sans', 'sans-serif'],
            'pp': ['Paprika', 'sans-serif']
        },
        // fonts end
        // images start
        backgroundImage: {
            'bannerBg': "url(images/headerBg.jpg)",
            'footer-texture': "url('/img/footer-texture.png')",
        },
        // images end
      }
    }
  }