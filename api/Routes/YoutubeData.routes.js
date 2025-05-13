import { fetchVideos, createVideo } from "../Controller/VideoController.js";
import { verifyToken } from "../Middleware/AuthMiddleware.js";

export function videoRoutes(app) {
    // Get all videos
    app.get('/api/videos', (req, res) => {
        fetchVideos(req, res);
    });

    // Create new video
    app.post('/api/videos', verifyToken, (req, res) => {
        createVideo(req, res);
    });
}