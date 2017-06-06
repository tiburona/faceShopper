'use strict'

const {STRING, INTEGER, DECIMAL, JSON, TEXT} = require('sequelize')

module.exports = db => db.define('faces', {
  title: {
    type: STRING,
    allowNull: false,
    len: [0, 50]
  },

  image: {
    type: JSON,
    allowNull: false
  },

  description: {
    type: TEXT,
    allowNull: false,
    len: [1, 400]
  },

  price: {
    type: DECIMAL(10, 2),
    allowNull: false
  },

  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: { min: 0, max: 5 }
  }})

// Reviews, and Orders
// both an order has many faces or face belongs to order

// db.posts.belongsTo(db.users);
// db.users.hasMany(db.posts);

// face has many reviews (OR review belongs to face)

// foreign key should be on review

//
// Review.belongsTo(Face)
// Face.hasMany(Review)

//

// Parent.belongsToMany( Child, {
//     as: [Relationship],
//     through: [Parent_Child] //this can be string or a model,
//     foreignKey: 'Parent_rowId'
// });

// Child.belongsToMany(Parent, {
//     as: [Relationship],
//     through: [Parent_Child],
//     foreignKey: 'Child_rowId'
// });

// Face.belongsToMany( Order, {
//  as: [Purchase],
//  through: [Face_Order]
//  foreignKey: 'FaceId'
// })

module.exports.associations = (Face, {Order, Review}) => {

}

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }