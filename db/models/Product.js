const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Product", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: { type: DataTypes.STRING },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
        validate: {
          min: 5,
          max: 50,
        },
      },
      image: { type: DataTypes.STRING },
    })
    SequelizeSlugify.slugifyModel(product, {
        source: ["name"],
      });
      
      product.associate = (models) => {
        models.Shop.hasMany(Product,{foreignKey: "shopId",as: "product",allowNull: false});
        Product.belongsTo(models.Shop,{foreignKey:"shopId"})
      };
      
      return Product;

  };