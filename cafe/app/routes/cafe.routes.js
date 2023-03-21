module.exports = app => {
    const cafe = require("../controllers/cafe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Cafe
    router.post("/", cafe.create);
  
    // Retrieve all Cafe
    router.get("/", cafe.findAll);
  
    // Retrieve all Tinh Trang Cafe
    //router.get("/TinhTrang", cafe.findAllTinhTrang);
  
    // Retrieve a single Cafe with id
    router.get("/:id", cafe.findOne);
  
    // Update a Cafe with id
    router.put("/:id", cafe.update);
  
    // Delete a Cafe with id
    router.delete("/:id", cafe.delete);
  
    // Delete all Cafe
    router.delete("/", cafe.deleteAll);
  
    //app.use("/cafe", router);
    app.use("/api/", router)
  };
  