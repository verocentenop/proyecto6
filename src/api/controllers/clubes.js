const Club = require('../models/clubes')
const Jugador = require('../models/jugadores')

const getClubes = async (req, res, next) => {
  try {
    const clubes = await Club.find().populate('jugadores')
    return res.status(200).json(clubes)
  } catch (error) {
    return res.status(400).json('Solicitud fallida')
  }
}
const getClubesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const clubes = await Club.findById(id).populate('jugadores')
    return res.status(200).json(clubes)
  } catch (error) {
    return res.status(400).json('Solicitud byid fallida')
  }
}
const getClubesByPais = async (req, res, next) => {
  try {
    const { pais } = req.params
    const clubes = await Club.find({ pais: pais }).populate('jugadores')
    return res.status(200).json(clubes)
  } catch (error) {
    return res.status(400).json('Solicitud bypais fallida')
  }
}
const postClub = async (req, res, next) => {
  try {
    const newClub = new Club(req.body)
    const clubSaved = await newClub.save()
    return res.status(201).json(clubSaved)
  } catch (error) {
    return res.status(400).json('Solicitud post fallida')
  }
}
const putClub = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldClub = await Club.findById(id)
    if (!oldClub) {
      return res.status(404).json({ message: 'Club no encontrado' })
    }
    const updatedFields = { ...req.body }
    delete updatedFields.jugadores

    const clubUpdated = await Club.findByIdAndUpdate(
      id,
      { $addToSet: { jugadores: { $each: req.body.jugadores || [] } } },
      { new: true }
    )

    return res.status(200).json(clubUpdated)
  } catch (error) {
    return res.status(400).json({ message: 'Solicitud put fallida' })
  }
}
const deleteClub = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteClub = await Club.findByIdAndDelete(id)
    return res.status(200).json(deleteClub)
  } catch (error) {
    return res.status(400).json('Solicitud delete fallida')
  }
}
module.exports = {
  getClubes,
  getClubesById,
  getClubesByPais,
  postClub,
  putClub,
  deleteClub
}
