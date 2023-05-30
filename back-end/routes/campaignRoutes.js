// Rachel testing stuff out, feel free to ignore
const express = require("express");
const campaignController = require("./../controllers/campaignController");
const router = express.Router();

router
    .route("/")
    .get(campaignController.getAllCampaigns)
    .post(campaignController.createCampaign);
router
    .route("/:id")
    .get(campaignController.getCampaign)
    .patch(campaignController.updateCampaign)
    .delete(campaignController.deleteCampaign);

module.exports = router;