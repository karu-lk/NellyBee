import { Request, Response, Router } from 'express';
import UserProfile from '../models/UserProfile';
import { json } from 'body-parser';

export class UserProfileController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public all(req: Request, res: Response): void {
        UserProfile.find()
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.json({ error });
            });
    }

    public one(req: Request, res: Response): void {
        const id: string = req.params.userId;

        UserProfile.findOne({ id })
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    // create a new post
    public create(req: Request, res: Response): void {
        const id: string = req.body.userId;
        const userIdToken: string = req.body.userIdToken;
        const authToken: string = req.body.authToken;
        const userEmail: string = req.body.userEmail;
        const userPic: string = req.body.userPic;
        const userFullName: string = req.body.userFullName;
        const authProvider: string = req.body.authProvider;
        const userStatus: string = 'pending';
        const lastModifiedTime: Date = req.body.lastModifiedTime;

        if (!id || !userFullName || !authToken) {
            res.status(422).json({ message: 'Missing required fields.' });
        }

        const newUserProfile = new UserProfile({
            id,
            userIdToken,
            authToken,
            userEmail,
            userPic,
            userFullName,
            authProvider,
            userStatus,
            lastModifiedTime
        });

        newUserProfile.save()
            .then((data) => {
                res.status(201).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    // update post by params of 'slug'
    public update(req: Request, res: Response): void {
        const id: string = req.params.userId;

        UserProfile.findOneAndUpdate({ id }, req.body)
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    // delete post by params of 'slug'
    public delete(req: Request, res: Response): void {
        const id: string = req.params.userId;

        UserProfile.findOneAndRemove({ id })
            .then(() => {
                res.status(204).end();
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    public routes() {
        this.router.get('/', this.all);
        this.router.get('/:userId', this.one);
        this.router.post('/', this.create);
        this.router.put('/:userId', this.update);
        this.router.delete('/:userId', this.delete);
    }
}

const userProfileController = new UserProfileController();
userProfileController.routes();

export default userProfileController.router;