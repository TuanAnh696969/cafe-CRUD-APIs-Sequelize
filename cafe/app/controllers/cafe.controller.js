const db = require("../models");
const Cafe = db.cafe;
const Op = db.Sequelize.Op;

// Create and Save a new Cafe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Can_Nang) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Cafe
  const cafe = {
    Can_Nang: req.body.Can_Nang,
    Co_Xay: req.body.Co_Xay,
    So_Luong: req.body.So_Luong,
    //Tinh_Trang: req.body.Tinh_Trang ? req.body.Tinh_Trang : false
  };

  // Save Cafe in the database
  Cafe.create(cafe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cafe ."
      });
    });
};

// Retrieve all Cafe from the database.
exports.findAll = (req, res) => {
  const Can_Nang = req.query.Can_Nang;
  var condition = Can_Nang ? { Can_Nang: { [Op.iLike]: `%${title}%` } } : null;

  Cafe.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cafe ."
      });
    });
};

// Find a single Cafe  with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cafe.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find cafe  with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving cafe with id=" + id
      });
    });
};

// Update a Cafe  by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cafe.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cafe den was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Cafe  with id=${id}. Maybe Cafe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cafe  with id=" + id
      });
    });
};

// Delete a Cafe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cafe.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cafe was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Cafe with id=${id}. Maybe Cafe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cafe with id=" + id
      });
    });
};

// Delete all Cafe from the database.
exports.deleteAll = (req, res) => {
  Cafe.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cafe were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cafe."
      });
    });
};
/*
// find all Tinh Trang Cafe
exports.findAllTinhTrang = (req, res) => {
  Cafe.findAll({ where: { Tinh_Trang: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cafe."
      });
    });
*/