export class Authendication {


    public authenticate(req: any, res: any, next: any): void {
        try {
            next()
        } catch (error) {
            console.error("Authentication error:", error);
            res.status(401).json({ message: "Unauthorized" });
        }
    }
}