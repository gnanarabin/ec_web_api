export class Authendication {


    public authendication(req: any, res: any, next: any): void {
        try {
            next()
        } catch (error) {
            const err = error as Error;
            res.status(401).json({ error: err.message });
        }
    }
}