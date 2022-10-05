const router = require("../../utils/sysRoute");

const authenticateToken = require("../../auth/authenticateToken");
const {
  getTicket,
  createTicket,
  listTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers");
// this should be a post request
router.get("/ticket/view/:ticketId", getTicket);
router.post("/ticket/new", createTicket);
router.get("/ticket/list", listTicket);
router.put("/ticket/update/:ticketId", authenticateToken, updateTicket);
router.delete("/ticket/delete/:ticketId", authenticateToken, deleteTicket);

module.exports = router;
