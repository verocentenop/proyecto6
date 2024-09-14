const mongoose = require('mongoose')
const Jugador = require('../../api/models/jugadores')
const jugadores = require('../../data/jugadores')

const sendSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://futbol-p6:ZKyMC9yAMAqHcRRS@cluster0.229ap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Jugador.collection.drop()

    await Jugador.insertMany(jugadores)

    await mongoose.disconnect()
  } catch (error) {
    console.log('Error al lanzar seed')
  }
}
sendSeed()
