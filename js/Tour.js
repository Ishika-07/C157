AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "tantri-mantri",
        title: "Tantri the Mantri",
        url: "./assets/thumbnails/tantri_img.jpg",
      },
      {
        id: "suppandi",
        title: "Suppandi",
        url: "./assets/thumbnails/suppandi_img.jpg",
      },

      {
        id: "shikari-shambu",
        title: "Shikari Shambu",
        url: "./assets/thumbnails/shambu_img.jpg",
      },
      {
        id: "ramu-shamu",
        title: "Ramu and Shamu",
        url: "./assets/thumbnails/ramushamu_img.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var border = this.createBorder(position, item.id);
      

      // Thumbnail Element
      var thumbNail = this.createThumbnail(position, item)
      border.appendChild(thumbNail);

      // Title Text Element
      var title = this.createTitle(position, item);
      border.appendChild(title);

      this.placesContainer.appendChild(border);
    }
  },
  createThumbnail: function(position, item){
    const bEntity = document.createElement("a-entity");
    bEntity.setAttribute("id",item.id + "-pic");
    //bEntity.setAttribute("position",position);
    bEntity.setAttribute("geometry", {
      primitive:"plane",
      width:15,
      height:20,
    })
    bEntity.setAttribute("material",{
      src: item.url
    })
    bEntity.setAttribute("visible",true)
    return bEntity; 
  },
  createBorder: function(position, id){
    const bEntity = document.createElement("a-entity");
    bEntity.setAttribute("id",id);
    bEntity.setAttribute("position",position);
    bEntity.setAttribute("geometry", {
      primitive:"plane",
      width:0,
      height:0,
    })
    bEntity.setAttribute("material",{
      color: "white",
    })
    bEntity.setAttribute("visible",true)
    return bEntity;
  },
  createTitle: function(position, item){
    const bEntity = document.createElement("a-entity");
    bEntity.setAttribute("id",item.id + "-title");
    bEntity.setAttribute("position",{x:position.x, y:-20, z:position.z});
    bEntity.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 85,
      color: "#000",
      value: item.title
    })
    bEntity.setAttribute("visible",true)

    return bEntity; 
  }
  
});
