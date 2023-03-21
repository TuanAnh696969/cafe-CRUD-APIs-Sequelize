module.exports = (sequelize, Sequelize) => {
    const Cafe = sequelize.define("cafe", {
      Can_Nang: {
        type: Sequelize.STRING
      },
      Co_Xay: {
        type: Sequelize.STRING
      },
      So_Luong: {
        type: Sequelize.STRING
      },
      /*
      Tinh_Trang: {
        type: Sequelize.BOOLEN,
        Tinh_Trang: false,
      }
      */
      
    });
  
    return Cafe;
  };
  