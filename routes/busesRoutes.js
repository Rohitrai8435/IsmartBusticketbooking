const express = require("express");
const router = express();

const {
  AddBus,
  GetAllBuses,
  UpdateBus,
  DeleteBus,
  GetBusById,
  GetBusesByFromAndTo,
} = require("../Controllers/busController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add-bus", AddBus);
router.post("/get-all-buses", GetAllBuses);
router.put("/:id", UpdateBus);
router.delete("/:id", DeleteBus);
router.get("/:id", GetBusById);
router.post("/get", GetBusesByFromAndTo);

module.exports = router;
