import buyCourseService from '../services/buyCourse.js'

class BuyCourseController {

    async buy(req, res) {
        let resData = await buyCourseService.buyCourse(req)
        return res.status(resData.status).json(resData)
    }
}

const buyCourseController = new BuyCourseController()

export default buyCourseController