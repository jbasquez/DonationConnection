const db = require('../models');

module.exports = {
    addDonation: (req, res) => {
        db.Donations
            .create(req.body)
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    completeDonation: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'complete' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.Donations
            .find()
            .sort({ date: -1 })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    findDonation: (req, res) => {
        db.Donations
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMine: (req, res) => {
        db.Donations
            .find({ userId: req.body.userId })
            .then(usersDonations => res.json(usersDonations))
            .catch(err => res.status(422).json(err));
    },
    makeAvailable: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'true' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    reserve: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'false' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        console.log('REMOVE DONATIONS')
        db.Donations
            .findOneAndDelete({ _id: req.params.id })
            .catch(err => res.status(422).json(err));
    }
}
