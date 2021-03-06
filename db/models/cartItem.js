'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.FLOAT
  }
}, {
    classMethods: {
      migrate(unAuthCartId, userCartId) {    // this can get called like so: 
        this.update(                         // CartItem.migrate(Cart.getUnAuthCartId(sessionId), Cart.getUserCartId(userId))
          { cartId: userCartId },
          { where: { cartId: unAuthCartId } })
      }
    },
    instanceMethods: {
      increment(num) {
        this.quantity += num
      }
    }
  })

module.exports.associations = (CartItem, { Cart, Face }) => {
  CartItem.belongsTo(Cart, {
    foreignKey: { allowNull: false }
  })
  CartItem.belongsTo(Face, {
    foreignKey: { allowNull: false }
  })
}
